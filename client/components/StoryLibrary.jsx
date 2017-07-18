import React from 'react'
import { connect } from 'react-redux';

import {getStoryTags} from '../actions/StoriesActions'

import StoryLibraryItem from './StoryLibraryItem'

class StoryLibrary extends React.Component{
  renderStory (story) {
    this.props.dispatch(getStoryTags(story.id))
    if(this.props.tags){
      return <StoryLibraryItem
        key={story.id}
        story={story}
        tags={this.props.tags}
        />
    }
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

function mapStateToProps(state){
  return {
    tags:state.storyInfo.tags
  }
}

export default connect(mapStateToProps)(StoryLibrary)
