import fetch from 'isomorphic-fetch'

import {
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from './actionTypes'

export function addUserSuccess(suc){
  return{
    type: ADD_USER_SUCCESS,
    add_user_status:suc
  }
}

export function addUserFailure(err){
  return{
    type:ADD_USER_FAILURE,
    err
  }
}


var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export function addUser(user){
  return dispatch => {
    console.log(user)
    return fetch('/api/v1/users',{
      method:'POST',
      headers: myHeaders,
      mode: 'cors',
      body:user})
      .then(res=>dispatch(addUserSuccess(res)))
      .catch(ex=>dispatch(addUserFailure(ex)))
  }
}

export function getUserSuccess(user){
  return{
    type:GET_USER_SUCCESS,
    user:user
  }
}

export function getUserFailure(err){
  return{
    type:GET_USER_FAILURE,
    err
  }
}

export function getUser(){
  return dispatch => {
    return fetch('api/v1/users/newest')
      .then(res=>res.json())
      .then(user=>dispatch(getUserSuccess(user)))
      .catch(ex=>dispatch(getUserFailure(ex)))
  }
}
