var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

var api = require('./routes/api')

var app = express()

app.set('knex-database', knex)

app.use('/api',api)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

module.exports = app
