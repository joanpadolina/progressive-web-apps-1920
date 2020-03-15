const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

let dataResults

router
    .get('/', homePage)
    .get('/:id', detailPage)



// render homepage
async function homePage(req, res) {
   
    if (dataResults) {
        console.log(dataResults)
        res.render('index.ejs', {
            data: dataResults
        })
    } else {
        const data = await topNewsApi()
        res.render('index.ejs', {
            data
        })
    }
}

// render detail

async function detailPage(req, res) {
    const data = await topNewsApi()
    const id = req.params.id
    const renderOnedata = data.find(data => data.id == id)
    res.render('detail.ejs', {
        item: renderOnedata
    })
}

// api fetch


const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=`,
    key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt'

function cleanData(data) {
    let newData = data.results
    // console.log(newData)
    return newData.map(d => {
        // console.log('test', d.multimedia.map(d => {return d.url[0]}))
        return {
            id: getArticleId(d.uri),
            dataTitle: d.title,
            info: d.abstract,
            urlArticle: d.url,
            img: d.multimedia,
            date: new Date(d.published_date),
            section: d.section,
            subsection: d.subsection,
            author: d.byline
        }
    })

}

function topNewsApi() {
    return fetch(urlTopNews + key)
        .then(async response => {
            let data = await response.json()
            return data
        })
        .then(item => cleanData(item))
        .then(data => dataResults = data)

}


let test = 'nyt://article/96955278-e3f1-55ba-a3b0-c26208af9d42'

function getArticleId(uri) {
    var str = uri
    var res = str.split("/")
    return res[3]
}



module.exports = router