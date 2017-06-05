// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

// We use supertest here because we are testing api.

var test = require('ava')
var request = require('supertest')

var app = require('../../server/server')
var configureDatabase = require('../helpers/database-config')

//Here we are using the temporary database for testing again, so that actual database is not modified
configureDatabase(test, function (db) {
  app.set('knex-database', db)
})

test.cb('GET /api/users/:id gets single user', function (t) {
  request(app)
    .get('/api/users/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.length, 1)
      t.is(res.body[0].user_name, 'Sabrina')
      t.end()
    })
})
//
// //This is just an example
// test.cb('postUser saves a user', (t) => {
//   request(app)
//     .post('/users')
//     .send({name: 'Yoko'})
//     // .expect('Content-Type', /json/)
//     // .expect(201)
//     .end((err, res) => {
//       if (err) throw err
//       return t.context.db('users')
//         .select()
//         .then((result) => {
//           t.is(result.length, 5)
//           t.is(result[26].name, 'Yoko')
//           t.end()
//         })
//     })
// })
