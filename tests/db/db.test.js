// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configurationDatabase = require('../helpers/database-config')
configurationDatabase(test)

var db = require('../../server/db/db_functions')

test('getUsers gets a all users in the database', function (t) {
  return db.getUsers(t.context.connection)
    .then(function(result){
      var actual = result.length
      t.is(3, actual)
    })
})

let userInput={
  user_name:'Mary',
  user_gender:'woman',
  lover_name:'George Clooney',
  lover_gender:'man',
}

test('saveUser saves a gingle user to the database', function (t){
  return db.saveUser(userInput, t.context.connection)
    .then((res)=>{
      t.is(res.length,1) //the length of array of id of items inserted should be only one
    })
})

test('saveUser saves user info into the database', function (t){
  return db.saveUser(userInput, t.context.connection)
    .then((res)=>{
      return t.context.connection('users').select().where('id',4).first()
    })
    .then((res)=>{
      t.is(res.user_name,"Mary")
    })
})

test('getStories get all stories in the database', function (t){
  return db.getStories(t.context.connection)
    .then((result)=>{
      t.is(result.length,4)
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

let friendInput ={
  user_id:3,
  friend_name:'Lily'
}

test('saveFriend saves friend info into the database', function (t){
  return db.saveFriend(friendInput, t.context.connection)
    .then((res)=>{
      return t.context.connection('users_friends').select()
    })
    .then((res)=>{
      t.is(res.length,2)
      t.is(res[0].friend_name,'Lily')
    })
})

test('getFriend gets friend name of one user', function (t){
  return db.getFriend(1, t.context.connection)
    .then((res)=>{
      t.is(res.friend_name,'Lily')
    })
})

test('getStoryInfo gets total chapter numbers of a story', function(t){
  return db.getStoryInfo('hotel-room', t.context.connection)
    .then((res)=>{
      t.deepEqual(res,{total_chapters: 2})
    })
})

test('getStoryTags gets all tags of a story', function(t){
  return db.getStoryTags(1, t.context.connection)
    .then((res)=>{
      t.deepEqual(res,[ { stories_id:1, tag: 'romantic' }, { stories_id:1, tag: 'celebrity' } ])
    })
})
