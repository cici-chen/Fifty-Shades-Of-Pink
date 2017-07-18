import fetch from 'isomorphic-fetch'
import request from 'superagent'

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

export function getStoryInfoSuccess(chapterInfoObject){
  return{
    type: "GET_STORY_INFO_SUCCESS",
    payload:chapterInfoObject['total_chapters']
  }
}

export function getStoryInfoFailure(err){
  return{
    type: "GET_STORY_INFO_FAILURE",
    payload:err
  }
}

export function getStoryInfo(storyTitle){
  return dispatch => {
    request
      .get(`/api/v1/stories/${storyTitle}`)
      .end(function(err,res){
        err ? dispatch(getStoryInfoFailure(err)) : dispatch(getStoryInfoSuccess(res.body))
      })
  }
}

export function getStoryTagsSuccess(storyTagsArray){
  return{
    type: "GET_STORY_TAGS_SUCCESS",
    payload:storyTagsArray
  }
}

export function getStoryTagsFailure(err){
  return{
    type: "GET_STORY_TAGS_FAILURE",
    payload:err
  }
}

export function getStoryTags(storyID){
  return dispatch => {
    request
      .get(`/api/v1/stories/tags/${storyID}`)
      .end(function(err,res){
        err ? dispatch(getStoryTagsFailure(err)) : dispatch(getStoryTagsSuccess(res.body))
      })
  }
}
