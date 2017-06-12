import fetch from 'isomorphic-fetch'

import {
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE
} from './actionTypes'

export function addUserSuccess(user){
  return{
    type: ADD_USER_SUCCESS,
    user
  }
}

export function addUserFailure(err){
  return{
    type:ADD_USER_FAILURE,
    err
  }
}

export function addUser(user){
  return dispatch => {
    return fetch('/api/v1/users',{
      method:'POST',
      body:user})
      .then(res=>res.send(201))
      .then(user=>dispatch(addUserSuccess(user)))
      .catch(ex=>dispatch(addUserFailure(ex)))
  }
}
