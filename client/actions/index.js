import fetch from 'isomorphic-fetch'

import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE
} from './actionTypes'

function fetchStoriesRequest(){
  return{
    type: FETCH_STORIES_REQUEST
  }
}

function fetchStoriesSuccess(stories){
  return{
    type: FETCH_STORIES_SUCCESS,
    stories:stories
  }
}

function fetchStoriesFailure(err){
  return{
    type: FETCH_STORIES_FAILURE,
    err:err
  }
}

export function fetchStories(){
  return dispatch => {
    dispatch(fetchStoriesRequest())
    return fetch('/api/v1/stories')
      .then(res => dispatch(fetchStoriesSuccess(res.body)))
      .catch(ex => dispatch(fetchStoriesFailure(ex)))
  }
}
