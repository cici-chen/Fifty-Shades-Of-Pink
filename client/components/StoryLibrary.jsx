import React from 'react'

import StoryLibraryItem from './StoryLibraryItem'

class StoryLibrary extends React.Component{
  renderStory (story) {
    return <StoryLibraryItem
      key={story.id}
      story={story}/>
  }
  renderStories() {
    return this.props.stories.map((story)=>this.renderStory(story))
  }
  render(){
    return (
      <div className="story-library">
        <div className='row'>
          {this.renderStories()}
        </div>
      </div>
    )
  }
}

export default StoryLibrary
