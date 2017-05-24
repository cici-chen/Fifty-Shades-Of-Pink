import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Form from './Form'
import ErrorMessage from './ErrorMessage'

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
          <h1 className='Header'> Fifty Shades of Pink</h1>
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
