import React from 'react'
import {connect} from 'react-redux'

import {addUser} from '../actions/UserActions'

class Extra extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      friendName:''
    })
  }
  fieldChanged(e){
    this.setState(
      {
        [e.target.id]:e.target.value
      }
    )
  }
  save(e){
    location.href=this.props.storyUrl
  }
  render(){
    return (
      <div className='extra'>
        <div id='extra-title'>
          <p className='text-capitalize'>Add more elements </p>
        </div>
        <form className='form-horizontal'>
          <div className="form-group">
            <span>Your friend's name is</span>
            <input type="text" className="form-control" id="friendName" placeholder=""
                onChange={e => this.fieldChanged(e)}
                value={this.state.friendName} />
          </div>
        <button className="submit-button" onClick={e => this.save(e)}>Read Story</button>
        </form>
      </div>
    )
  }
}

export default connect()(Extra)
