import React from 'react'

const StoryLibraryItem = ({story})=> {
    return (
      <div className="story-library-item">
        <div className="bookcover">
          <a href={story.storyUrl}>
            <img src={story.image} alt="a book cover"></img>
          </a>
        </div>
        <h3>{story.title}</h3>
        <p className="story-description">{story.description}</p>
      </div>
  )
}

export default StoryLibraryItem
