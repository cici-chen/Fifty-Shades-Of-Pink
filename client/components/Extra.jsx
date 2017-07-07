import React from 'react'
import {connect} from 'react-redux'

import {getUser, addFriend} from '../actions/UserActions'

class Extra extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      friendName:''
    })
  }
  componentDidMount(){
    this.props.dispatch(getUser())
  }
  fieldChanged(e){
    this.setState(
      {
        [e.target.id]:e.target.value
      }
    )
  }
  save(e){
    this.props.dispatch(addFriend({
      user_id:this.props.user.id,
      friend_name:this.state.friendName
    }))
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

function mapStateToProps(state) {
  return {user:state.user.user}
}

export default connect(mapStateToProps)(Extra)
