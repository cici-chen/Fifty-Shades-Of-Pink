var test = require('ava')
var request = require('supertest')

var app = require('../../server/server')
var configureDatabase = require('../helpers/database-config')

//Here we are using the temporary database for testing again, so that actual database is not modified
configureDatabase(test, function (db) {
  app.set('knex-database', db)
})

test.cb('GET /api/v1/stories gets all stories', function (t) {
  request(app)
    .get('/api/v1/stories')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.length, 4)
      t.is(res.body[2].title, "Behind the Mask")
      t.end()
    })
})
