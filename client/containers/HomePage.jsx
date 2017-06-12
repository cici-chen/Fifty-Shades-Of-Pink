import React from 'react'

import HomepageForm from '../components/HomepageForm'

class HomePage extends React.Component {
  submit=(values)=>{
    console.log(values);
  }
  render(){
    return (
      <div className='home-page'>
        <p>Welcome! We've been waiting to tell your story!</p>
        <HomepageForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default HomePage
