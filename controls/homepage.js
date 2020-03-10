const fetch = require('node-fetch')

let dataResults

async function homepage(req, res) {
    if (dataResults) {
        res.render('index.ejs', {
            data
        })
    } else {
        const data = await topNewsApi()
        res.render('index.ejs', {
            data
        })
    }
}

// api fetch
const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=`,
    key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt'

function topNewsApi() {
    return fetch(urlTopNews + key)
        .then(async response => {
            let data = await response.json()
            return data
        })
        .then(item => cleanData(item))
        .then(data => dataResults = data)
}

function cleanData(data) {
    const newData = data.results
    return newData.map(d => {
        return {
            id: getArticleId(d.uri),
            dataTitle: d.title,
            info: d.abstract,
            urlArticle: d.url,
            img: d.multimedia[0].url,
            date: new Date(d.published_date),
            section: d.section,
            subsection: d.subsection,
            author: d.byline
        }
    })
}


let test = 'nyt://article/96955278-e3f1-55ba-a3b0-c26208af9d42'

function getArticleId(uri) {
    var str = uri
    var res = str.split("/")
    return res[3]
}

module.exports = {homepage}