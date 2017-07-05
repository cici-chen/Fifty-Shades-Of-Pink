import React from 'react'

const StoryLibraryItem = ({story})=> {
    return (
      <div className="story-library-item container-fluid">
        <div className='row'>
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-6 bookcover">
                <a href={story.storyUrl}>
                  <img src={story.image} alt="a book cover"></img>
                </a>
              </div>
              <div className="col-sm-6 book-info">
                <p id='story-title'>{story.title}</p>
                <p className="story-description">{story.description}</p>
                <p>Author:JK Rowling</p>
                <p>Rating:♡♡♡♡♡ 200 people rated </p>
                <p>3432 people have read it</p>
                <p>Published: 2017/05/04</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StoryLibraryItem
