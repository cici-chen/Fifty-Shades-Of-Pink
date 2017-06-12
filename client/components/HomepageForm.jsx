import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {validate, renderField, radioRenderField} from './validation-HomepageForm'

let HomepageForm = props => {
  const {handleSubmit, reset, submitting}=props
  return(
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label>My name is</label>
        <br/>
        <Field className='input-field' name='userName' component={renderField} type='text' />
      </div>
      <div>
        <label>I am a </label>
        <Field  id='user-woman' name='userGender' component='input' type='radio' value='woman' />
        <label> woman </label>
        <Field  id='user-man' name='userGender' component='input' type='radio' value='man' />
        <label> man </label>
        <Field className='input-field' name='userGender' component={radioRenderField} type='text' />
      </div>
      <div id='divider'></div>
      <div>
        <label>My lover's name is</label>
        <br/>
        <Field className='input-field' name='loverName' component={renderField} type='text' />
      </div>
      <div>
        <label>My lover is a </label>
        <Field className='input-field' name='loverGender' component='input' type='radio' value='woman'/>
        <label> woman </label>
        <Field className='input-field' name='loverGender' component='input' type='radio' value='man'/>
        <label> man </label>
        <Field className='input-field' name='userGender'component={radioRenderField} type='text' />
      </div>
      <button className='form-button' type='submit'>Read My Stories</button>
      <button className='form-button' type='button' disabled={submitting} onClick={reset}>Clear Values</button>
    </form>
  )
}

let createReduxForm=reduxForm({
  form:'homepage',
  validate:validate
})
HomepageForm=createReduxForm(HomepageForm)

export default HomepageForm
