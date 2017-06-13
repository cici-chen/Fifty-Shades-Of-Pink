import React from 'react'

const StoryLibraryItem = ({story})=> {
    return (
      <div className="story-library-item">
        <div className="bookcover">
          <a href={story.storyUrl}>
            <img src={story.image} alt="a book cover"></img>
          </a>
        </div>
        <div className="book-info">
          <p id='story-title'>{story.title}</p>
          <p className="story-description">{story.description}</p>
        </div>
      </div>
  )
}

export default StoryLibraryItem
