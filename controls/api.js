const fetch = require('node-fetch')

const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=`,
    key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt'


async function topNewsApi() {
    const data = await fetch(urlTopNews + key)
    const response = await data.json
    const cleanedData = cleanData(response)
    return cleanedData
}

async function renderTopNews() {
    const data = await topNewsApi()
    console.log(data)
    res.render('home.ejs', {
        data
    })
}

function cleanData(data) {
    const newData = data.results
    return newData.map(d => {
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


function getArticleId(uri) {
    var str = uri
    var res = str.split("/")
    return res[3]
}

module.exports = renderTopNews