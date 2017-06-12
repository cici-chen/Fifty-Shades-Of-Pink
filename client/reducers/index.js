import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import storyLibrary from './storyLibrary'

export default combineReducers({
  storyLibrary:storyLibrary,
  form:formReducer
})
