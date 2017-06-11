import React from 'react'
import { connect } from 'react-redux';

import StoryLibrary from '../components/StoryLibrary.jsx'
import {fetchStories} from '../actions/StoriesActions'

class StoryLibraryContainer extends React.Component{

  constructor(props) {
   super(props);
 }

  componentWillMount(){
    this.props.dispatch(fetchStories())
  }

  render(){
    return(
      <div>
        <StoryLibrary stories={this.props.stories}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
   return { stories:state.storyLibrary.stories };
}

export default connect(mapStateToProps)(StoryLibraryContainer)
