import React from 'react'

export default (props) => {
  return(
    <div className="container-fluid site-header text-uppercase text-center text-nowrap">
      <a href='/'><h1>{props.header}</h1></a>
    </div>
  )
}
