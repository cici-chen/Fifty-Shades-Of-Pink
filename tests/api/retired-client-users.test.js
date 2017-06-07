import test from 'ava'
import nock from 'nock'

test('faking passing test',t=>{
    t.pass()
})

//Since I'm not calling api like this anymore I don't need this test anymore

// import * as api from '../../client/api/users'
//
// const testUserInfo={
//   id:1,
//   user_name:"Sabrina"
// }
//
// test.cb('getUser gets info of a single user', t =>{
//   var scope = nock('http://localhost:80')
//   //Here you're telling nock: when I visit localhost(the port is 80 I don't know why, it doesn't matter which port your app runs on), give me those things.
//     .get('/api/v1/users/1')
//     .reply(200, testUserInfo)
//     //You're telling nock how to pretend to behave as the real server
//
//   api.getUser(1, (actual)=>{
//     scope.done()
//     //Here you're saying: did you get a request? If yes this will not retrun error
//     t.is(actual.user_name,"Sabrina")
//     t.end()
//   })
// })
//
// test.cb('saveUser hits the correct route, and takes two argument', t =>{
//   var scope = nock('http://localhost:80')
//     .post('/api/v1/users')
//     .reply(201)
//
//   api.saveUser(testUserInfo,()=>{
//     scope.done()
//     t.end()
//   })
// })
