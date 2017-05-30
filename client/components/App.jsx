import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import Form from './Form'
import StoryLibrary from './StoryLibrary'
import FiftyChapterHeader from './headers/FiftyChapterHeader'
import FiftyChapOne from './fifty/FiftyChapOne'
import FiftyChapTwo from './fifty/FiftyChapTwo'
import ChapterNav from './navigation/ChapterNav'
import HotelChapOne from './hotel/HotelChapOne'
import HotelChapTwo from './hotel/HotelChapTwo'
import MaskChapOne from './mask/MaskChapOne'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      user: "",
      stories:[
        {id:1,
        name:"fifty-shades-of-pink",
        title:"Fifty Shades of Pink",
        image:"http://www.victoriajanssen.com/wp-content/uploads/2011/08/beaconBB138.jpg",
        description:"The hotel room was a white dream of cleanliness. The coolness of the air conditioner tickled Ariel’s skin as she lay on the soft mattress, surrounded by pillows, sinking further into the thick, downy duvet. The blanket puffed up around her, as if she were floating on a cloud.",
        storyUrl:"/stories/fifty-shades-of-pink/chapter/:id",
        firstchapUrl:"/stories/fifty-shades-of-pink/chapter/1"},

        {id:2,
        name:"hotel-room",
        title:"Hotel Room",
        image:"http://www.victoriajanssen.com/wp-content/uploads/2011/08/hereis-GM0218.jpg",
        description:"It was hard to hear over the music, and Kelly thought she’d heard wrong. A Jager buzz verging on full-out drunk combined with the flashing lights, throbbing bass and cigarette smoke hanging in the air made the world feel as if it were turning upside down.",
        storyUrl:"/stories/hotel-room/chapter",
        firstchapUrl:"/stories/hotel-room/chapter/1"},

        {id:3,
        name:"behind-the-mask",
        title:"Behind the Mask",
        image:"http://www.victoriajanssen.com/wp-content/uploads/2011/08/softcoverB0890.jpg",
        description:"bby swirled the amber liquid in her glass. It was a fine scotch, full of aroma and spice. A nice finish, not much kick on the back end - overall very smooth. She always felt sexy drinking it. It made her very aware of the way the silky, navy blue fabric felt on her skin.",
        storyUrl:"/stories/behind-the-mask/chapter/1",
        firstchapUrl:"/stories/behind-the-mask/chapter/1"}
      ]
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
    console.log("props in app now is: ", this.state.user);
    return (
      <Router>
        <div className='app'>
          <ErrorMessage error={this.state.error} />
          <Header />
          <Route exact path='/' component={() =>
              <Form passPropGotoStoryLibrary={this.gotoStoryLibrary.bind(this)} /> }
            />
          <div className='content'>
          <Route path = '/story-library' component={() =>
              <StoryLibrary passStories={this.state.stories} /> }
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
