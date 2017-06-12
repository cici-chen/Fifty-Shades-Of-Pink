import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import storyLibrary from './storyLibrary'
import user from './user'

export default combineReducers({
  user:user,
  storyLibrary:storyLibrary,
  form:formReducer
})
