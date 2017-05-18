import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Form from './Form'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <Router>
        <div className='app'>
          <h1 className='Header'> Fifty Shades of Pink</h1>
          <div className='content'>
            <Route exact path='/' component={Form} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
