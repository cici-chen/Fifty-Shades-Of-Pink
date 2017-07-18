import React from 'react'
import { connect } from 'react-redux';

import HeaderContainer from './HeaderContainer'
import StoryLibrary from '../components/StoryLibrary.jsx'

import {fetchStories} from '../actions/StoriesActions'

class StoryLibraryContainer extends React.Component{

  componentWillMount(){
    this.props.dispatch(fetchStories())
  }

  render(){
    return(
      <div>
        <HeaderContainer />
        <StoryLibrary stories={this.props.stories}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
   return {
     stories:state.storyLibrary.stories,
     user:state.user
   };
}

export default connect(mapStateToProps)(StoryLibraryContainer)
