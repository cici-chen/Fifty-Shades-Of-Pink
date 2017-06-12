import React from 'react'
import {connect} from 'react-redux'

import HomepageForm from '../components/HomepageForm'
import {addUser} from '../actions/UserActions'

class HomePage extends React.Component {
  constructor(props){
    super(props)
  }

  submit=(values)=>{
    this.props.dispatch(addUser(values))
    location.href='#story-library'
  }
  render(){
    return (
      <div className='home-page'>
        <p id='welcome'>We've been waiting to tell your story!</p>
        <HomepageForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect()(HomePage)
