import React from 'react'
import {Link} from 'react-router-dom'

export default class ChapterNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="chapter-nav">
        <Link to="/"><button>Home</button></Link>
        <Link to="/story-library"><button>Story Library</button></Link>
      </div>
    )
  }
}
