const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const home = require('../controls/homepage')
const detail = require('../controls/detailpage')
require('dotenv').config()

router
    .get('/', home)
    .get('/account', accountPage)
    .get('/detail/:id', detail)
    .get('/offline', (req, res) => {
        console.log('Load Offline')
        res.render('status/offline.ejs')
    })



function accountPage(req, res) {
    res.render('account.ejs')
}



module.exports = router