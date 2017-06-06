import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api/users'

const userInfo={
  id:1,
  user_name:"Sabrina"
}

var scope = nock('http://localhost:80')
//Here you're telling nock: when I visit localhost(the port is 80 I don't know why, it doesn't matter which port your app runs on), give me those things.
  .get('/api/v1/users/1')
  .reply(200, userInfo)
  //You're telling nock how to pretend to behave as the real server
  .post('/api/v1/users', userInfo)
  //nock allows chaining like this
  .reply(201)

test.cb('getUser gets info of a single user', t =>{
  api.getUser(1, (actual)=>{
    scope.done()
    //Here you're saying: did you get a request? If yes this will not retrun error
    t.is(actual.user_name,"Sabrina")
    t.end()
  })
})

test.cb('saveUser post userInfo to the route', t =>{
  api.saveUser(userInfo,(err)=>{
    scope.done()
    t.is(err, null)
    t.end()
  })
})
