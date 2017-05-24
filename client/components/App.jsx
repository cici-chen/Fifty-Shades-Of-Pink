import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import Form from './Form'
import ChapOne from './ChapOne'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }

  }

//This function is passed to Form component, called on upon submitting the form
  readChapOne() {
    location.href="#chapter/1"
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <ErrorMessage error={this.state.error} />
          <div className='Header'>
            <Header />
          </div>
          <div className='content'>
            <Route exact path='/' component={() => <Form readChapOneCallback={this.readChapOne.bind(this)} /> }
              />
            <Route path='/chapter/1' component={()=> <ChapOne /> }
              />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
