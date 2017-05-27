import React from 'react'
import {Link} from 'react-router-dom'

import StoryLibraryItem from './StoryLibraryItem'

export default (props) => {
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
