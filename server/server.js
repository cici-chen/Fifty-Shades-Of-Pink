var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

var api = require('./routes/api')

var app = express()

app.set('knex-database', knex)

//Configure to handles post requests
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

// You must make sure that you define all configurations BEFORE defining routes.
app.use('/api',api)

module.exports = app
