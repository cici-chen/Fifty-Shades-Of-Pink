// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configurationDatabase = require('../helpers/database-config')
configurationDatabase(test)

var db = require('../../server/db/db_functions')

test('getUser gets a single user by id in the database', function (t) {
  var expected = 'Sabrina'
  return db.getUser(1, t.context.connection)
    .then(function(result){
      var actual = result[0].user_name
      t.is(expected, actual)
    })
})
