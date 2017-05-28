import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Content from './Content'
import Chap2 from './fifty/Chap2'

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

  nextChap(e){
  }

  render() {
    let {Sabrina, her, she, Lily, his, he, NewYork, GongYoo} = this.state.userInfo
    console.log("this state in ChapOne ", this.state, "props in ChapOne", this.props.chap_id)
    return(
      <Router>
        <div className="story-container">
          <h4>CHAPTER {this.state.chapter}</h4>
          {this.state.chapter === 1 && <Content userInfo={this.state.userInfo} />}
          <Route path = '/stories/fifty-shades-of-pink/chapter/:id' component = {(props)=>
              <Chap2 userInfo={this.state.userInfo} chap_id={props.match.params.id}/>}
            />
          <button onClick={e => this.nextChap(e)}>Next Chapter</button>
        </div>
      </Router>
    )
  }
}
