import React from 'react'
import {connect} from 'react-redux'

import {getUser,getFriend} from '../actions/UserActions'

import HeaderContainer from './HeaderContainer'
import ChapterContent from '../components/ChapterContent'

class ChapterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    storyTitle:this.props.match.params.story,
    chapter:this.props.match.params.chapter
    };
  }
  
  componentWillMount(){
    this.props.dispatch(getUser())
  }

  componentWillReceiveProps(nextProps){
    let{user_name,user_gender,lover_name,lover_gender,id}=nextProps.user.user
    this.setState({
      userName:user_name,
      userGender:user_gender,
      loverName:lover_name,
      loverGender:lover_gender,
    })
    if (this.state.userName == undefined) {
      this.props.dispatch(getFriend(nextProps.user.user.id))
    }
    if (nextProps.user.friend){
      this.setState({
        friendName:nextProps.user.friend.friend_name
      })
    }
  }

  render() {
    console.log(this.props.match.params.chapter)
    let {userName, userGender, loverName, loverGender, friendName,chapter,storyTitle} = this.state
    let linkPrev = `?#/stories/fifty-shades-of-pink/${parseInt(this.state.chapter)-1}`
    let linkNext = `?#/stories/fifty-shades-of-pink/${parseInt(this.state.chapter)+1}`
    return (
      <div>
        <HeaderContainer storyTitle={this.state.storyTitle}/>
          <div className='single-chapter'>
            <div className="story-container container-fluid chapter-content">
              <p className="chapter-number text-center"> CHAPTER {this.state.chapter}</p>
              {this.state.friendName ? <ChapterContent
                userName={userName}
                userGender={userGender}
                loverName={loverName}
                loverGender={loverGender}
                friendName={friendName}
                story={storyTitle}
                chapter={chapter} /> : <p>Content Loading...</p>}
            </div>
            <div className="chapter-nav">
              {this.state.chapter !=1 && <a href={linkPrev}><button type="button" className="btn btn-default">Previous  Chapter</button></a>}
              <a href={linkNext}><button type="button" className="btn btn-default" onClick={this.changeChapter}>Next Chapter</button></a>
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user:state.user.user
  }
}
//props.user = {
// user:{
//   id:3,
//   lover_gender:"woman",
//   lover_name:"Dragon Girl",
//   user_gender:"man",
//   user_name:"John Snow"
// }

export default connect(state=>state)(ChapterContainer)
