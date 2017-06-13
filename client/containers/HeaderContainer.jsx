import React from 'react'
import {connect} from 'react-redux'

import Header from '../components/Header'
import {fetchPageHeader} from '../actions/PageActions'

class HeaderContainer extends React.Component {

  componentWillMount(){
    //get rid of the # in url, thanks to Harrison
    if (window.location.hash === '#/' || window.location.hash === '#/story-library'){
      let url = window.location.hash.split('').filter(char => char != '#').join('')
      this.props.dispatch(fetchPageHeader(url))
    }
    else {
      this.props.dispatch(fetchPageHeader(this.props.storyTitle))
    }
  }

  render(){
      return <Header header={this.props.header}/>
  }
}

export default connect(state=>state.header)(HeaderContainer)
