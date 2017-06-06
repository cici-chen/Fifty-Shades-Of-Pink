import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//Makes the Redux store available to the connect() calls in the component wrapped in them.

import store from './store'
import App from './components/App'

console.log('State of the entire app', store.getState())

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
