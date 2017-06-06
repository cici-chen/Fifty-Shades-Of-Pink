import React from 'react'
import { connect } from 'react-redux';

import StoryLibrary from '../components/StoryLibrary.jsx'
import {fetchStories} from '../actions'

const StoryLibrary = (props) => (

  componentWillMount(){
    props.dispatch(fetchStories())
  }

  <div>
    <StoryLibrary stories={props.stories}/>
  </div>
)

function mapStateToProps(state) {
   return { stories: state.stories };
}

export default connect(mapStateToProps)(StoryLibrary)
