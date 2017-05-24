import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import Form from './Form'
import ChapOne from './ChapOne'
import ChapTwo from './ChapTwo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      user: { }
    }

  }

//This function is passed to Form component, called on upon submitting the form
  readChapOne(userInput) {
    console.log("data from form is saved in app: ", userInput)
    this.setState({
      user: userInput
    })
    location.href="#chapter/1"
  }

  render() {
    console.log("the state in app now is: ", this.state.user);
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
            <Route path='/chapter/1' component={()=> <ChapOne userInfo={this.state.user}/> }
              />
            <Route path='/chapter/2' component={()=> <ChapTwo userInfo={this.state.user}/> }
              />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
