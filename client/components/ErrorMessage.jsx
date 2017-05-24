import React from 'react'

export default class ErrorMessage extends React.Component {

  shouldComponentUpdate () {
    return  !!this.props.error
  }

  render() {
    let errorView = null
    if (this.props.error) {
      errorView = (
        <div className ='errpr'>
          HORROR!!! AN ERROR HAS OCCURED!!! NO!!! {this.props.error.message}
          <div>
            If case of emergency (if you are in desperately need of personalized romance story), please contact web guru cicichen2015@qq.com for asssistance.
          </div>
        </div>
      )
    }
    return(
      errorView
    )
  }
}
