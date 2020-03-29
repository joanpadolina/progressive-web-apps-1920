const fetch = require('../controls/api')

async function home(req, res) {
    let dataResults = await fetch()

    if (dataResults) {
        res.render('index.ejs', {
            data: dataResults
        })
    } else {
        const data = await fetch()
        res.render('index.ejs', {
            data
        })
    }
}



module.exports = home