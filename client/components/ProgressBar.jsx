import React from 'react'

class ProgressBar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const divStyle={
      width:Number(this.props.progress)*100+'%'
    }
    return(
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={divStyle}>
          <span className="sr-only">60% Complete</span>
        </div>
      </div>
    )
  }
}

export default ProgressBar
