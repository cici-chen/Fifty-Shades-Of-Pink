import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render(){
    return(
      <div className='form'>
        <p>Welcome! We've been waiting to tell your story!</p>
        <form action='/chapter/1' method='post'>
          <div>
            My name is <input type='text' name='user.name'/>
          </div>
          <div>
            I am a <input type='radio' name='user.gender'/> woman <input type='radio' name='user.gender'/> man
          </div>
          <div>
            My lover's name is <input type='text' name='lover.name'/>
          </div>
          <div>
            My lover is a <input type='radio' name='lover.gender'/>woman <input type='radio' name='lover.gender'/> man
          </div>
          <div>
            <input type='submit' value='Read My Story!'/>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
