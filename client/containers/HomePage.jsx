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

  submit=(values)=>{
    let what= new Promise((resolve, reject) =>{
      .then(()=>{
        this.setState(()=>{
          return {err:this.props.user.err}
        })
      })
    })
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.user.err){ location.href='#story-library' }
  }
  render(){
    let err=this.state.err
    return (
      <div>
        {err && <ErrorMessage err={String(err)}/>}
        <HeaderContainer />
        <div className='home-page'>
          <p id='welcome'>We've been waiting to tell your story!</p>
          <HomepageForm onSubmit={this.submit} />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
   return { user:state.user };
}

export default connect(mapStateToProps)(HomePage)
