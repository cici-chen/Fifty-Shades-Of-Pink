import React from 'react'

import ErrorMessage from './ErrorMessage'

class HomepageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userName: '',
      userGender: '',
      loverName:'',
      loverGender:'',
      err:false,
      userNameEM:'',
      userGenderEM:'',
      loverNameEM:'',
      loverGenderEM:''
    }
  }

  //functions to handle form
  fieldChanged(e){
    this.setState(
      {
        [e.target.id]:e.target.value
      }
    )
  }

//Do not add preventDefault otherwise the button won't change until the form is rerendered
  handleOptionChange(e){
    this.setState(
      {
        [e.target.id]:e.target.value
      }
    )
  }

  validateForm () {
    let {userName,userGender,loverName,loverGender}=this.state
    if(userName==''){
      this.setState({userNameEM:'What is your name? '})
    }
    if (userGender==''){
      this.setState({userGenderEM:'What is your gender? '})
    }
    if (loverName==''){
      this.setState({loverNameEM:'What is your lover\'s name? '})
    }
    if (loverGender==''){
      this.setState({loverGenderEM:'What is your lover\'s name?'})
    }
    for (var key in this.state) {
      if (this.state[key] == '') return false
      else return true
    }
  }

  clearError(e){
    this.setState({
      [`${e.target.id}EM`]:null,
      err:false
    })
  }

  save (e){
    e.preventDefault()
    const userInput=this.state
    if (this.validateForm()){
      console.log('boya')
    } else {
      this.setState({err:true})
    }
    // else alert('please fill in all fields')
  }

  render(){
    return(
      <form className='form-horizontal'>
        {this.state.err && <ErrorMessage displayText={`${this.state.userNameEM}${this.state.userGenderEM}${this.state.loverNameEM}${this.state.loverGenderEM}`}/>}
        <div className="form-group">
          <span id="form-text-1">My name is</span>
             <input type="text" className="form-control" id="userName" placeholder=""
               onFocus={e => this.clearError(e) }
               onChange={e => this.fieldChanged(e)}
               value={this.state.userName} />
        </div>
        <div className="form-group">
          <span id="form-text-2">I am a</span>
          <div className='radio'>
            <label>
              <input type="radio" name="optionsRadios1" id="userGender" value="woman"
              onFocus={e => this.clearError(e)}
              onChange={e => this.handleOptionChange(e)}
              checked={this.state.userGender=="woman"} />
              woman
            </label>
            <label>
            <input type="radio" name="optionsRadios1" id="userGender" value="man"
              onFocus={e => this.clearError(e)}
              onChange={e => this.handleOptionChange(e)}
              checked={this.state.userGender=="man"} />
            man
            </label>
          </div>
        </div>
        <div className="form-group">
          <span id="form-text-1" className="text-nowrap">My lover's name is</span>
             <input type="text" className="form-control" id="loverName" placeholder=""
               onFocus={e => this.clearError(e)}
               onChange={e => this.fieldChanged(e)}
               value={this.state.loverName} />
        </div>
        <div className="form-group">
          <span className="text-capitalize" id="form-text-2">{this.state.loverName} is a</span>
          <div className='radio'>
            <label>
              <input type="radio" name="optionsRadios2" id="loverGender" value="woman"
              onFocus={e => this.clearError(e)}
              onChange={e => this.handleOptionChange(e)}
              checked={this.state.loverGender=="woman"} />
              woman
            </label>
            <label>
            <input type="radio" name="optionsRadios2" id="loverGender" value="man"
              onFocus={e => this.clearError(e)}
              onChange={e => this.handleOptionChange(e)}
              checked={this.state.loverGender=="man"} />
            man
            </label>
          </div>
        </div>
          <div>
          <button className="submit-button" onClick={e => this.save(e)}>Read My Stories</button>
          </div>
      </form>
    )
  }

}

export default HomepageForm
