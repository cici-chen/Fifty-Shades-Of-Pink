import React from 'react'

class HomepageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userName: '',
      userGender: '',
      loverName:'',
      loverGender:''
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
    for (var key in this.state) {
      if (this.state[key] == null || this.state[key] == '') return false
    }
    return true
  }

  save (e){
    e.preventDefault()
    const userInput=this.state
    if (this.validateForm()) console.log(this.props.onSubmit)
    else this.props.onError()
    // else alert('please fill in all fields')

  }

  render(){
    return(
      <form className='form-horizontal'>
        <div className="form-group">
          <span id="form-text-1">My name is</span>
             <input type="text" className="form-control" id="userName" placeholder=""
               onChange={e => this.fieldChanged(e)}
               value={this.state.userName} />
        </div>
        <div className="form-group">
          <span id="form-text-2">I am a</span>
          <div className='radio'>
            <label>
              <input type="radio" name="optionsRadios1" id="userGender" value="woman"
              onChange={e => this.handleOptionChange(e)}
              checked={this.state.userGender=="woman"} />
              woman
            </label>
            <label>
            <input type="radio" name="optionsRadios1" id="userGender" value="man"
              onChange={e => this.handleOptionChange(e)}
              checked={this.state.userGender=="man"} />
            man
            </label>
          </div>
        </div>
        <div className="form-group">
          <span id="form-text-1" className="text-nowrap">My lover's name is</span>
             <input type="text" className="form-control" id="loverName" placeholder=""
               onChange={e => this.fieldChanged(e)}
               value={this.state.loverName} />
        </div>
        <div className="form-group">
          <span id="form-text-2">{this.state.loverName} is a</span>
          <div className='radio'>
            <label>
              <input type="radio" name="optionsRadios2" id="loverGender" value="woman"
              onChange={e => this.handleOptionChange(e)}
              checked={this.state.loverGender=="woman"} />
              woman
            </label>
            <label>
            <input type="radio" name="optionsRadios2" id="loverGender" value="man"
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
