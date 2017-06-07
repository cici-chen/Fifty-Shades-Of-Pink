import request from 'superagent'

import {receiveStories} from '../actions'

export function getStories(callback){
  request
    .get('/api/v1/stories')
    .end((err,res) => {
      if (err) console.log("error occured while trying to get stories from server api", err)
      else {
        callback(receiveStories(res.body))
      }
    })
}
