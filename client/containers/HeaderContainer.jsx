import React from 'react'
import {connect} from 'react-redux'

import Header from '../components/Header'
// import fetchPageHeader from '../actions/PageActions'

class HeaderContainer extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){

    let url = window.location.hash.split('').filter(char => char != '#').join('')
    this.props.dispatch(fetchPageHeader(url))
    console.log({url});
  }

  render(){
    return <Header/>
  }
}

export default connect()(HeaderContainer)
// export default connect(state=>{header:state.page.header}) HeaderContainer
