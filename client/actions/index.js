import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE
} from './actionTypes'

import {getStories} from '../api/stories'

function fetchStoriesRequest(){
  return{
    type: FETCH_STORIES_REQUEST
  }
}

function fetchStoriesSuccess(stories){
  return{
    type: FETCH_STORIES_SUCCESS,
    stories
  }
}

function fetchStoriesFailure(err){
  return{
    type: FETCH_STORIES_FAILURE,
    err
  }
}

export function fetchStories(){
  return dispatch => {
    dispatch(fetchStoriesRequest())
    return getStories((err,stories)=>{
      dispatch(fetchStoriesSuccess(stories))
    })
  }
}
