import request from 'superagent'

import {
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from './actionTypes'

export function addUserSuccess(suc){
  return{
    type: ADD_USER_SUCCESS,
    payload:suc.body
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
    request
      .post('/api/v1/users')
      .send(user) // sends a JSON post body
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {dispatch(addUserFailure(err))} else{
          dispatch(addUserSuccess(res))
        }
      })
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
    request
      .get('/api/v1/users/newest')
      .end(function(err, res){
        err ? dispatch(getUserFailure(err)) : dispatch(getUserSuccess(res.body))
      })
  }
}

export function addFriendSuccess(suc){
  return{
    type: 'ADD_FRIEND_SUCCESS',
    payload:suc.body
  }
}

export function addFriendFailure(err){
  return{
    type:'ADD_FRIEND_FAILURE',
    err
  }
}

export function addFriend(friend){
  return dispatch => {
    request
      .post('/api/v1/users/friend')
      .send(friend)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {dispatch(addFriendFailure(err))} else{
          dispatch(addFriendSuccess(res))
        }
      })
    }
}

export function getFriendSuccess(suc){
  return{
    type: 'GET_FRIEND_SUCCESS',
    payload:suc.body
  }
}

export function getFriendFailure(err){
  return{
    type:'GET_FRIEND_FAILURE',
    err
  }
}

export function getFriend(userID){
  return dispatch => {
    request
      .get(`/api/v1/users/friend/${userID}`)
      .end(function(err, res){
        err ? dispatch(getFriendFailure(err)) : dispatch(getFriendSuccess(res))
      })
    }
}
