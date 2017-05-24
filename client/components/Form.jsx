import React from 'react'

export default class Form extends React.Component {
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

//Do not add preventDefault otherwise the button won't change until the form is rerendered
  handleOptionChange(e){
    this.setState(
      {
        [e.target.name]:e.target.value
      }
    )
  }

  save (e){
    e.preventDefault()
    this.props.readChapOneCallback()
  }

  render(){
    console.log(this.state);
    return(
      <div className='form'>
        <p>Welcome! We've been waiting to tell your story!</p>
        <form>
          <div>
            My name is <input type='text' name='userName'
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
          <p></p>
          <div>
          <button onClick={e => this.save(e)}>Read My Story!</button>
          </div>
        </form>
      </div>
    )
  }

}
