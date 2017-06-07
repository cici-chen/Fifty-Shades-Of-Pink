import {FETCH_STORIES_REQUEST,RECEIVE_STORIES} from './actionTypes'

import {getStories} from '../api/stories'

function fetchStoriesRequest(){
  return{
    type: FETCH_STORIES_REQUEST
  }
}

export function receiveStories(stories){
  return{
    type:RECEIVE_STORIES,
    stories
  }
}

export function fetchStories(){
  return dispatch => {
    dispatch(fetchStoriesRequest())
    return getStories(dispatch)
  }
}
