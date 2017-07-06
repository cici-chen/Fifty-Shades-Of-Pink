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
    console.log(this.state.showExtra)
    let {story}=this.props
    return (
      <div className="col-md-3 col-container">
      <div className="story-library-item container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-6 book-cover" onClick={e=>this.showExtra(e)}>
                  <img className="img-responsive center-block" src={story.image} alt="a book cover"></img>
              </div>
              <div className="col-md-12 col-sm-6 col-xs-6 book-info">
                <p id='story-title'>{story.title}</p>
                {this.state.showExtra ? <Extra storyUrl={story.storyUrl}/> :
                <div className="boxes">
                <div className='upper-box'>
                  <p>Author:JK Rowling</p>
                  <p>Rating:♡♡♡♡♡ 200 </p>
                  <p className='text-nowrap' >3432 people have read it</p>
                  <p>Published: 2017/05/04</p>
                </div>
                <div className='lower-box'>
                  <i className="fa fa-bath" aria-hidden="true"></i>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <i className="fa fa-list" aria-hidden="true"></i>
                </div>
                </div>
              }
              </div>
              <div className="row">
                <p className="col-sm-12 col-xs-12 story-description">{story.description}</p>
              </div>
            </div>

    </div>
    </div>
  )}
}

export default StoryLibraryItem
