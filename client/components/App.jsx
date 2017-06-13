import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import StoryLibrary from '../containers/StoryLibrary'
import HomePage from '../containers/HomePage'
import ChapterContainer from '../containers/ChapterContainer'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
        <Route exact path='/' component={HomePage} />
        <Route path = '/story-library' component={StoryLibrary} />
        <Route path = '/stories/:story/:chapter' component={ChapterContainer} />
        </div>
      </Router>
    )
  }
}

export default App
