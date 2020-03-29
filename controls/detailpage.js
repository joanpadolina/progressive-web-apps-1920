const api = require('../controls/api')

// render detail

async function detailPage(req, res) {
    const data = await api()
    const id = await req.params.id
    const renderOnedata = await data.find(data => data.id == id)
    res.render('detail.ejs', {
        item: renderOnedata
    })
}

module.exports = detailPage