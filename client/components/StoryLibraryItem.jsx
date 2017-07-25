import React from 'react'
import { connect } from 'react-redux';

import {getStoryTags} from '../actions/StoriesActions'
import Extra from './Extra'

class StoryLibraryItem extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showExtra:false,
      tags:[]
    }
  }
  componentWillMount(){
    this.props.dispatch(getStoryTags(this.props.story.id))
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.tags){
      nextProps.tags.map((item)=>{
        this.state.tags.push(item)
      })
    }
  }
  renderTags(storyID){
    let tags=this.state.tags.filter((element)=>{
      return element.stories_id == storyID
    })
    return tags.map((item,index)=>{
      return <span key={index} id='tag'>{item.tag}</span>
    })
  }

  showExtra(e){
    this.state.showExtra ? this.setState({showExtra:false}) : this.setState({showExtra:true})
  }
  render(){
    let {story}=this.props
    return (
      <div className="col-md-3 col-container">
      <div className="story-library-item container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-6 book-cover" onClick={e=>this.showExtra(e)}>
                  <img className="img-responsive center-block" src={story.image} alt="a book cover"></img>
              </div>
              <p className="col-md-12 col-sm-6 col-xs-6" id='story-title'>{story.title}</p>
              <div className="row">
                <p className="col-sm-6 col-xs-6 story-description">{story.description}</p>
                <div className="col-md-12 col-sm-6 col-xs-6 book-info">
                  {this.state.showExtra ? <Extra storyUrl={story.storyUrl} /> :
                  <div className="boxes">
                  <div className='upper-box'>
                    <p>Author: {story.author}</p>
                    <p>Rating:♡♡♡♡♡ 200 </p>
                    <p className='text-nowrap' >3432 people have read it</p>
                    <p>Published: {story.publish_date}</p>
                    <p>Status: {story.status=="finished" ? <span id="finished">{story.status}</span> : <span id="unfinished">{story.status}</span>}</p>
                    <p>Length: {story.total_chapters} chapters</p>
                    <p>Genre: {this.state.tags.length>0 && this.renderTags(story.id)}</p>
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

function mapStateToProps(state){
  return {
    tags:state.storyInfo.tags
  }
}

export default connect(mapStateToProps)(StoryLibraryItem)
