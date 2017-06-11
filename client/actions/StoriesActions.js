import fetch from 'isomorphic-fetch'

import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE
} from './actionTypes'

//the first three actions are only exported for testing. We don't actually need to export them for the app
export function fetchStoriesRequest(){
  return{
    type: FETCH_STORIES_REQUEST
  }
}

export function fetchStoriesSuccess(stories){
  return{
    type: FETCH_STORIES_SUCCESS,
    stories:stories
  }
}

export function fetchStoriesFailure(err){
  return{
    type: FETCH_STORIES_FAILURE,
    err:err
  }
}

export function fetchStories(){
  return dispatch => {
    dispatch(fetchStoriesRequest())
    return fetch('/api/v1/stories')
      .then(res => res.json())
      .then(data=>dispatch(fetchStoriesSuccess(data)))
      .catch(ex => dispatch(fetchStoriesFailure(ex)))
  }
}