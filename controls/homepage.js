const fetch = require('../controls/api')


async function home(req, res) {

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


module.exports = home