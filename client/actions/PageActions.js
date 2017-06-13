import fetch from 'isomorphic-fetch'
import request from 'superagent'
import {
  FETCH_HEADER_SUCCESS,
  FETCH_HEADER_FAILURE
} from './actionTypes'

export function fetchHeaderSuccess(header){
  return{
    type: FETCH_HEADER_SUCCESS,
    header
  }
}

export function fetchHeaderFailure(err){
  return{
    type:FETCH_HEADER_FAILURE,
    err
  }
}

export function fetchPageHeader(url){
  return dispatch => {
    return fetch(`/api/v1/headers?url=${url}`)
      .then(res=>res.json())
      .then(header=>dispatch(fetchHeaderSuccess(header)))
      .catch(ex=>dispatch(fetchHeaderFailure(ex)))
  }
}

// If using superagent:
//   request
//     .get('/api/v1/headers')
//     .query({url})
//     .end((err, res) => {
//       console.log(res.body);
//     })
// }
