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

test.cb('GET /api/v1/users gets all users', function (t) {
  request(app)
    .get('/api/v1/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.length, 3)
      t.is(res.body[0].user_name, 'Sabrina')
      t.end()
    })
})

test.cb('GET /api/v1/users/newest gets the newest user', function (t) {
  request(app)
    .get('/api/v1/users/newest')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.user_name, 'John Snow')
      t.end()
    })
})

var object={
  id:'',
  user_name:'Mary',
  user_gender:'woman',
  lover_name:'George Clooney',
  lover_gender:'man',
}

test.cb('POST /api/v1/users adds a new user to database', function(t){
  request(app)
    .post('/api/v1/users')
    .send(object)
    .expect(201)
    .end((err, res) => {
      console.log(err)
      if (err) throw err
      return t.context.connection('users').select().then((result)=>{
        t.is(result.length, 4)
        t.is(result[3].user_name, 'Mary')
        t.end()
      })
    })
})
