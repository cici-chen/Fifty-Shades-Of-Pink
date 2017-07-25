import React from 'react'
import {connect} from 'react-redux'

import {getUser,getFriend} from '../actions/UserActions'
import {getStoryInfo} from '../actions/StoriesActions'

import HeaderContainer from './HeaderContainer'
import ChapterContent from '../components/ChapterContent'
import ProgressBar from '../components/ProgressBar'

class ChapterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    storyTitle:this.props.match.params.story,
    chapter:this.props.match.params.chapter
    };
  }

  componentWillMount(){
    this.props.dispatch(getUser(this.state.storyTitle))
    this.props.dispatch(getStoryInfo(this.state.storyTitle))
  }

  componentWillReceiveProps(nextProps){
    let{user_name,user_gender,lover_name,lover_gender,id}=nextProps.user.user
    this.setState({
      userName:user_name,
      userGender:user_gender,
      loverName:lover_name,
      loverGender:lover_gender,
      chapter:nextProps.match.params.chapter,
      storyTitle:nextProps.match.params.story
    })
    if (this.state.userName == undefined) {
      this.props.dispatch(getFriend(nextProps.user.user.id))
    }
    if (nextProps.user.friend){
      this.setState({
        friendName:nextProps.user.friend.friend_name
      })
    }
    this.setState({
      total_chapters:nextProps.storyInfo['total_chapters']
    })
  }

  render() {
    let {userName, userGender, loverName, loverGender, friendName,chapter,storyTitle} = this.state
    let linkPrev = `?#/stories/${this.state.storyTitle}/${parseInt(this.state.chapter)-1}`
    let linkNext = `?#/stories/${this.state.storyTitle}/${parseInt(this.state.chapter)+1}`
    let chapterProgress = (this.state.chapter/this.state.total_chapters)
    return (
      <div>
        <HeaderContainer storyTitle={this.state.storyTitle}/>
          <div className='single-chapter'>
            <div className="story-container container-fluid chapter-content">
              <p className="chapter-number text-center"> CHAPTER {this.state.chapter}</p>
              {friendName ?
              <ChapterContent
                userName={userName}
                userGender={userGender}
                loverName={loverName}
                loverGender={loverGender}
                friendName={friendName}
                story={storyTitle}
                chapter={chapter} /> : <p>Content Loading</p>}
            </div>
            <ProgressBar progress={chapterProgress}/>
            <div className="chapter-nav">
              {this.state.chapter !=1 && <a href={linkPrev}><button type="button" className="btn btn-default">Previous  Chapter</button></a>}
              {this.state.chapter >= this.state.total_chapters ? <button type="button" className="btn btn-default">This is the last Chapter</button> : <a href={linkNext}><button type="button" className="btn btn-default" onClick={this.changeChapter}>Next Chapter</button></a>
              }
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user:state.user.user,
    storyInfo:state.storyInfo
  }
}

export default connect(state=>state)(ChapterContainer)
