import React from 'react'
import {connect} from 'react-redux'

import ErrorMessage from '../components/ErrorMessage'
import HeaderContainer from './HeaderContainer'
import HomepageForm from '../components/HomepageForm'

import {addUser} from '../actions/UserActions'

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      err:null
    }
  }

  submit=(userInput)=>{
    this.props.dispatch(addUser(userInput))
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.user.err){ location.href='#story-library' }
  }
  render(){
    let err=this.state.err
    return (
      <div>
        {err && <ErrorMessage displayText={String(err)}/>}
        <HeaderContainer />
        <div className='home-page-form container-fluid text-center'>
          <p id='welcome'>We've been waiting to tell your story!</p>
          <HomepageForm submit={this.submit} />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
   return { user:state.user };
}

export default connect(mapStateToProps)(HomePage)
