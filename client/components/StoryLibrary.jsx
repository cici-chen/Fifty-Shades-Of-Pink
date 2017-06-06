import React from 'react'
import {connect} from 'react-redux'

import StoryLibraryItem from './StoryLibraryItem'

const StoryLibrary = (props) => {
  function renderStory (story) {
    return <StoryLibraryItem
      key={story.id}
      story={story}
      />
  }

  function renderStories() {
    return props.passStories.map(renderStory)
  }

  return(
      <div className="story-library">
        <h2>Choose A Story</h2>
        <div className='row'>
          {renderStories()}
        </div>
      </div>
    )
}

function mapStateToProps(state){
  return{
    StoryLibrary:state.StoryLibrary
  }
}

export default connect(mapStateToProps)(StoryLibrary)
