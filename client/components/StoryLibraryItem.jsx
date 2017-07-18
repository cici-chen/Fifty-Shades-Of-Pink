import React from 'react'

import Extra from './Extra'

class StoryLibraryItem extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showExtra:false
    }
  }
  showExtra(e){
    this.setState({
      showExtra:true
    })
  }
  render(){
    let {story,tags}=this.props
    return (
      <div className="col-md-3 col-container">
      <div className="story-library-item container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-6 book-cover" onClick={e=>this.showExtra(e)}>
                  <img className="img-responsive center-block" src={story.image} alt="a book cover"></img>
              </div>
              <p id='story-title'>{story.title}</p>
              <div className="row">
                <p className="col-sm-6 col-xs-6 story-description">{story.description}</p>
                <div className="col-md-12 col-sm-6 col-xs-6 book-info">
                  {this.state.showExtra ? <Extra storyUrl={story.storyUrl}/> :
                  <div className="boxes">
                  <div className='upper-box'>
                    <p>Author: {story.author}</p>
                    <p>Rating:♡♡♡♡♡ 200 </p>
                    <p className='text-nowrap' >3432 people have read it</p>
                    <p>Published: {story.publish_date}</p>
                    <p>Genre: {this.props.tags && this.renderTags()}</p>
                  </div>
                  <div className='lower-box'>
                    <i className="fa fa-bath" aria-hidden="true"></i>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <i className="fa fa-list" aria-hidden="true"></i>
                  </div>
                  </div>
                  }
                </div>
              </div>
            </div>

    </div>
    </div>
  )}
}

export default StoryLibraryItem
