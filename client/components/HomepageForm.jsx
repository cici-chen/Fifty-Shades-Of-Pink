import React from 'react'
import {Field, reduxForm} from 'redux-form'

let HomepageForm = props => {
  const {handleSubmit}=props
  return(
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label className='userName'>My name is</label>
        <Field name='userName' component='input' type='text' />
      </div>
      <div>
        <label className='userGender'>I am a</label>
        <Field name='userGender' component='input' type='radio' value='woman'/>
        woman
        <Field name='userGender' component='input' type='radio' value='man'/>
        man
      </div>
      <div>
        <label className='loverName'>My lover's name is</label>
        <Field name='loverName' component='input' type='text' />
      </div>
      <div>
        <label className='loverGender'>My lover is a</label>
        <Field name='loverGender' component='input' type='radio' value='woman'/>
        woman
        <Field name='loverGender' component='input' type='radio' value='man'/>
        man
      </div>
      <button type='submit'>Read My Stories</button>
    </form>
  )
}

let createReduxForm=reduxForm({form:'homepage'})
HomepageForm=createReduxForm(HomepageForm)

export default HomepageForm
