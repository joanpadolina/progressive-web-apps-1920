const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// routing 

const routes = require('./route/routes.js')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))

app
    .use(routes)
    .listen(port)