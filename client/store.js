import {createStore, applyMiddleware, compose} from 'redux'
//There should only be a single store in your app
//{compose} is used to apply several store enhancers in a row
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

const store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
