import React from 'react'

export default (props) => {
  return(
    <div className="site-header">
      <a href='/'><h1>{props.header}</h1></a>
    </div>
  )
}
