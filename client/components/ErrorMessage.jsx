import React from 'react'

export default class ErrorMessage extends React.Component {

  render() {
    return(
      <div className="alert alert-danger" role="alert">
        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
        <span className="sr-only">Error:</span>
        {this.props.displayText}
      </div>
    )}
}
