const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const topNewsApi = require('./api.js')

router.get('/', async () => {
    if (topNewsApi) {
        res.render('home.ejs', {
            data
        })
    } else {
        const data = await topNewsApi()
        res.render('home.ejs', {
            data
        })
    }
})

// console.log('hi',topNewsApi)
// async function homePage (req, res) {
//     if (topNewsApi) {
//         res.render('home.ejs', {
//             data
//         })
//     } else {
//         const data = await topNewsApi()
//         res.render('home.ejs', {
//             data
//         })
//     }

// }

module.exports = router