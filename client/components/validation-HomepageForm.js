import React from 'react'

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

module.exports={
  validate,
  renderField,
  radioRenderField
}
