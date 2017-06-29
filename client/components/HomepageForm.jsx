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
        [e.target.name]:e.target.value
      }
    )
  }

  handleTouch(e){
    this.setState(
      [`${e.target.name}Hint`]:"boya"
    )
  }
//Do not add preventDefault otherwise the button won't change until the form is rerendered
  handleOptionChange(e){
    this.setState(
      {
        [e.target.name]:e.target.value
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
    if (this.validateForm()) console.log('banana')
    else console.log('yo')
    // else alert('please fill in all fields')

  }

  render(){
    return(
      <div className='form'>
        <form>
          <div className='input-field'>
            <div>
              My name is <input type='text' name='userName'
              onFocus={e => this.handleTouch(e)}
              onChange={e => this.fieldChanged(e)}
              value={this.state.userName}/>
            </div>
            <div>
              I am a
              <input type='radio' name='userGender' value="woman"
                onChange={e => this.handleOptionChange(e)}
                checked={this.state.userGender=="woman"}/>
              woman
              <input type='radio' name='userGender' value="man"
                onChange={e => this.handleOptionChange(e)}
                checked={this.state.userGender=="man"}/>
              man
            </div>
            <p></p>
            <div>
              My lover's name is <input type='text' name='loverName'
              onChange={e => this.fieldChanged(e)}
              value={this.state.loverName}/>
            </div>
            <div>
              My lover is a
              <input type='radio' name='loverGender' value='woman'
                checked={this.state.loverGender==='woman'}
                onChange={e => this.handleOptionChange(e)}/>
              woman
              <input type='radio' name='loverGender' value='man'
                checked={this.state.loverGender==='man'}
                onChange={e => this.handleOptionChange(e)}/>
              man
            </div>
          </div>
          <div>
          <button className="submit-button" onClick={e => this.save(e)}>Read My Stories</button>
          </div>
        </form>
      </div>
    )
  }

}

export default HomepageForm
