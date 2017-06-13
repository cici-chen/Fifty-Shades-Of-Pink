import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import storyLibrary from './storyLibrary'
import user from './user'
import header from './header'

export default combineReducers({
  header:header,
  user:user,
  storyLibrary:storyLibrary,
  form:formReducer
})
