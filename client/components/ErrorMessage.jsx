import React from 'react'

export default class ErrorMessage extends React.Component {

  render() {
    return(
      <div className ='error-message'>
        <h2>D'OH!!! AN ERROR OCCURED!!!</h2>
        <div id='error'>
          <p>{this.props.err}</p>
        </div>
        <p id='personal-message'>
          In case of emergency (if you are in desperately need of personalized romance story), contact web guru cicichen2015@qq.com for asssistance.
        </p>
      </div>
    )}
}
