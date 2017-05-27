import React from 'react'
import {Link} from 'react-router-dom'

import Content from './Content'

export default class ChapOne extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      userInfo: {
        Sabrina : this.props.userInfo.userName,
        her : this.props.userInfo.userGender === 'woman'? 'her':'his',
        she : this.props.userInfo.userGender === 'woman'? 'she':'he',
        Lily : this.props.userInfo.friendName === ''? 'Lily': this.props.userInfo.friendName,
        his : this.props.userInfo.loverGender === 'man'? 'his':'her',
        he : this.props.userInfo.loverGender === 'man'? 'he':'she',
        NewYork: 'New York',
        GongYoo: this.props.userInfo.loverName
      },
      chapter:Number(this.props.chap_id)
    }
  }

  redirect(e){
    this.setState(
      {chapter:2}
    )
  }

  render() {
    let {Sabrina, her, she, Lily, his, he, NewYork, GongYoo} = this.state.userInfo
    console.log("this state in ChapOne ", this.state)
    return(
      <div className="story-container">
        <h4>CHAPTER {this.state.chapter}</h4>
        {this.state.chapter === 1 && <Content userInfo={this.state.userInfo} />}
        {this.state.chapter === 2 && <Content userInfo={this.state.userInfo} />}
        <button onClick={e => this.redirect(e)}>Next Chapter</button>
      </div>
    )
  }
}
