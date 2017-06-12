import React from 'react'

const header="read my story"

export default (props) => {
  return(
    <div className="site-header">
      <a href='/'><h1>{header}</h1></a>
    </div>
  )
}
