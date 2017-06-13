import React from 'react'
import {connect} from 'react-redux'

import HeaderContainer from './HeaderContainer'

class ChapterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    storyTitle:this.props.match.params.story,
    chapter:this.props.match.params.chapter
    };
  }

  render() {
    return (
      <div>
        <HeaderContainer storyTitle={this.state.storyTitle}/>
      </div>
    )
  }
}

export default connect()(ChapterContainer)
