import React from 'react'
import {Field, reduxForm} from 'redux-form'

const validate = values=>{
  const errors={}
  if(!values.userName){
    errors.userName='Required'
  }
  if(!values.userGender){
    errors.userGender='Required'
  }
  if(!values.loverName){
    errors.loverName='Required'
  }
  if(!values.loverGender){
    errors.loverName='Required'
  }
  return errors
}

const renderField=({input, label, type, meta:{touched, error}}) => {
  return(
    <div>
      <label>{label}</label>
      <div id="required">
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>))}
      </div>
    </div>
  )
}

const radioRenderField=({input, label, type, meta:{touched, error}}) => {
  return(
    <div>
      <div id="required">
        {touched && ((error && <span>{error}</span>))}
      </div>
    </div>
  )
}

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
        <label>I am a</label>
        <br/>
        <Field className='input-field' name='userGender' component='input' type='radio' value='woman'/>
        woman
        <Field className='input-field' name='userGender' component='input' type='radio' value='man'/>
        man
        <Field className='input-field' name='userGender' component={radioRenderField} type='text' />
      </div>
      <div>
        <label>My lover's name is</label>
        <br/>
        <Field className='input-field' name='loverName' component={renderField} type='text' />
      </div>
      <div>
        <label>My lover is a</label>
        <br/>
        <Field className='input-field' name='loverGender' component='input' type='radio' value='woman'/>
        woman
        <Field className='input-field' name='loverGender' component='input' type='radio' value='man'/>
        man
        <Field className='input-field' name='userGender'component={radioRenderField} type='text' />
      </div>
      <button className='input-field' type='submit'>Read My Stories</button>
      <button className='input-field' type='button' disabled={submitting} onClick={reset}>Clear Values</button>
    </form>
  )
}

let createReduxForm=reduxForm({
  form:'homepage',
  validate:validate
})
HomepageForm=createReduxForm(HomepageForm)

export default HomepageForm
