import {getStories} from '../api/stories'

export function fetchStories(){
  return getStories()
}

export function receiveStories(stories){
  return{
    type:'RECEIVE_STORIES',
    stories
  }
}
