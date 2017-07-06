import React from 'react'

class StoryLibraryItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <a href={this.props.storyUrl}>
          LOL
        </a>
      </div>
    )
  }
}
