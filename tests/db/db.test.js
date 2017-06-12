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

let object={
  user_name:'Mary',
  user_gender:'woman',
  lover_name:'George Clooney',
  lover_gender:'man'
}

test('saveUser saves a gingle user to the database', function (t){
  return db.saveUser(object, t.context.connection)
    .then((res)=>{
      t.is(res.length,1) //the length of array of id of items inserted should be only one
    })
})

test('saveUser saves user info into the database', function (t){
  return db.saveUser(object, t.context.connection)
    .then((res)=>{
      return t.context.connection('users').select().where('id',2).first()
    })
    .then((res)=>{
      t.is(res.user_name,"Mary")
    })
})

test('getStories get all stories in the database', function (t){
  return db.getStories(t.context.connection)
    .then((result)=>{
      t.is(result.length,3)
      t.is(result[1].name,"hotel-room")
    })
})

let pageUrl='/'

test('getHeader gets one header corresponding to pageUrl', function(t){
  return db.getHeader(pageUrl,t.context.connection)
    .then((result)=>{
      t.is(result.header,'read my story')
    })
})
