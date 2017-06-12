import React from 'react'
import {connect} from 'react-redux'

import StoryLibraryItem from './StoryLibraryItem'

const StoryLibrary = ({stories}) => {
  function renderStory (story) {
    return <StoryLibraryItem
      key={story.id}
      story={story}
      />
  }

  function renderStories() {
    return stories.map((story)=>renderStory(story))
  }

  return(
      <div className="story-library">
        <div className='row'>
          {renderStories()}
        </div>
      </div>
    )
}

export default StoryLibrary
