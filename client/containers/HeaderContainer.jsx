import React from 'react'
import {connect} from 'react-redux'

import Header from '../components/Header'
// import fetchPageHeader from '../actions/PageActions'

class HeaderContainer extends React.Component {
  constructor(props){
    super(props)
    console.log(window.location.hash);
  }

  render(){
    return <Header/>
  }
}

export default HeaderContainer
// export default connect(state=>{header:state.page.header}) HeaderContainer
