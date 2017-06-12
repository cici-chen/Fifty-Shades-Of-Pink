import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import FiftyChapterHeader from './headers/FiftyChapterHeader'
import FiftyChapOne from './fifty/FiftyChapOne'
import FiftyChapTwo from './fifty/FiftyChapTwo'
import ChapterNav from './navigation/ChapterNav'
import HotelChapOne from './hotel/HotelChapOne'
import HotelChapTwo from './hotel/HotelChapTwo'
import MaskChapOne from './mask/MaskChapOne'

import StoryLibrary from '../containers/StoryLibrary'
import HomePage from '../containers/HomePage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      user: ""
    }
  }

//This function is passed to Form component, called on upon submitting the form
  gotoStoryLibrary(userInput) {
    this.setState({
      user: userInput
    })
    location.href="#story-library"
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <ErrorMessage error={this.state.error} />
          <Header />
          <HomePage />
          <div className='content'>
          <Route path = '/story-library' component={() =>
              <StoryLibrary /> }
            />
          <Route path = '/stories'
            component={()=> <ChapterNav /> }
            />
          <Route path = '/stories/fifty-shades-of-pink' component={()=>
              <FiftyChapterHeader storyTitle={this.state.stories[0].title} /> }
            />
          <Route path= '/stories/fifty-shades-of-pink/chapter/1' component={(props)=>
              <FiftyChapOne userInfo={this.state.user} />}
            />
          <Route path= '/stories/fifty-shades-of-pink/chapter/2' component={(props)=>
              <FiftyChapTwo userInfo={this.state.user} />}
            />
          <Route path= '/stories/hotel-room/chapter/1' component={(props)=>
              <HotelChapOne userInfo={this.state.user} />}
            />
          <Route path= '/stories/hotel-room/chapter/2' component={(props)=>
              <HotelChapTwo userInfo={this.state.user} />}
            />
          <Route path= '/stories/behind-the-mask/chapter/1' component={(props)=>
              <MaskChapOne userInfo={this.state.user} />}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
