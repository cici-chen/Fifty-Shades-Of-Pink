import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api/stories'

const testStoriesInfo=[
  {
    id:1,
    name:"fifty-shades-of-pink"
  },
  {
    id:2,
    name:"hotel-room"
  }
]

test.cb('getStories get all stories in the database', t =>{
  var scope = nock('http://localhost:80')
  //Here you're telling nock: when I visit localhost(the port is 80 I don't know why, it doesn't matter which port your app runs on), give me those things.
    .get('/api/v1/stories')
    .reply(200, testStoriesInfo)
    //You're telling nock how to pretend to behave as the real server

  api.getStories((actual)=>{
    scope.done()
    //Here you're saying: did you get a request? If yes this will not retrun error
    t.is(actual.length,2)
    t.end()
  })
})
