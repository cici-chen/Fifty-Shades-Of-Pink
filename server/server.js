var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

module.exports = app
