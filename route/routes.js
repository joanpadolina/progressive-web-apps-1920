const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const home = require('../controls/homepage')
const api = require('../controls/api')
require('dotenv').config()
// home()
let dataResults

router
    .get('/', homePage)
    .get('/account', accountPage)
    .get('/detail/:id', detailPage)
    .get('/offline', (req, res) => {
        console.log('Load Offline')
        res.render('status/offline.ejs')
    })


// render homepage
async function homePage(req, res) {

    if (dataResults) {
        res.render('index.ejs', {
            data: dataResults
        })
    } else {
        const data = await api()
        res.render('index.ejs', {
            data
        })
    }
}

// render detail

async function detailPage(req, res) {
    const data = await topNewsApi()
    const id = await req.params.id
    const renderOnedata = await data.find(data => data.id == id)
    res.render('detail.ejs', {
        item: renderOnedata
    })
}


function accountPage(req, res) {
    res.render('account.ejs')
}


// api fetch
function cleanData(data) {
    let newData = data.results
    return newData.map(d => {
        // console.log(d)
        let structuredData = {
            id: getArticleId(d.uri),
            dataTitle: d.title,
            info: d.abstract,
            urlArticle: d.url,
            date: new Date(d.published_date),
            section: d.section,
            subsection: d.subsection,
            author: d.byline
        }

        //bas check if there is an url for the image tag
        if (d.multimedia[0].url) structuredData.img = d.multimedia[0].url
        else structuredData.img = 'https://www.groningen-seaports.com/wp-content/uploads/placeholder.jpg'

        return structuredData

    })

}

function topNewsApi() {
    return fetch(process.env.NEWS_API)
        .then(async response => {
            let data = await response.json()
            return data
        })
        .then(item => cleanData(item))
        .then(data => dataResults = data)

}

function getArticleId(uri) {
    var str = uri
    var res = str.split("/")
    return res[3]
}



module.exports = router