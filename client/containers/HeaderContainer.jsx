import React from 'react'
import {connect} from 'react-redux'

import Header from '../components/Header'
import {fetchPageHeader} from '../actions/PageActions'

class HeaderContainer extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    //get rid of the # in url, thanks to Harrison
    let url = window.location.hash.split('').filter(char => char != '#').join('')
    this.props.dispatch(fetchPageHeader(url))
  }

  render(){
      return <Header header={this.props.header}/>
  }
}

export default connect(state=>state.header)(HeaderContainer)
