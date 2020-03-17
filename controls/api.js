const fetch = require('node-fetch')

console.log('api fetch')
const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key='
const key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt'
const apiUrl = url + key

function topNewsApi() {
    return fetch(apiUrl)
        .then(async response => {
            const data = await response.json()
            return data
        })
        .then(item => cleanData(item))
}
topNewsApi()

function cleanData(data) {
    const newData = data.results
    return newData.map(d => {
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
        if (d.multimedia[0].url) structuredData.img = d.multimedia[0].url
        else structuredData.img = 'https://www.groningen-seaports.com/wp-content/uploads/placeholder.jpg'
        return structuredData
    })

}


function getArticleId(uri) {
    var str = uri
    var res = str.split("/")
    return res[3]
}

module.exports = topNewsApi