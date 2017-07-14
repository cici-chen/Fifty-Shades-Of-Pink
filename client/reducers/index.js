import {combineReducers} from 'redux'

import storyLibrary from './storyLibrary'
import user from './user'
import header from './header'
import storyInfo from './storyInfo'

export default combineReducers({
  header:header,
  user:user,
  storyLibrary:storyLibrary,
  storyInfo:storyInfo
})
