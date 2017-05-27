var server = require('./server')

var knex = require('knex')
var env = process.env.NODE_ENV || 'development'
var config = require('../knexlife')[env]

server.set('knex', knex(config))

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
