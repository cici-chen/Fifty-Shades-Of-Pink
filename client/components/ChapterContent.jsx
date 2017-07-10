import React from 'react'
import FiftyShadeChapOne from './fifty/ChapOne'

class ChapterContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: this.props.userName,
      loverName: this.props.loverName,
      her: this.props.userGender === 'woman'
        ? 'her'
        : 'his',
      she: this.props.userGender === 'woman'
        ? 'she'
        : 'he',
      friendName: this.props.friendName === ''
        ? 'friendName'
        : this.props.friendName,
      his: this.props.loverGender === 'man'
        ? 'his'
        : 'her',
      he: this.props.loverGender === 'man'
        ? 'he'
        : 'she'
    }
  }
  render() {
    let {
      userName,
      her,
      she,
      GoogYoo,
      his,
      he,
      friendName
    } = this.state
    return (
      this.props.chapter==1 ? <FiftyShadeChapOne userName={userName} her={her} she={she} GoogYoo={GoogYoo} his={his} he={he} friendName={friendName} />) : null
      this.props.chapter==2 ? <FiftyShadeChapTwo userName={userName} her={her} she={she} GoogYoo={GoogYoo} his={his} he={he} friendName={friendName} />) : null
      this.props.chapter==3 ?<FiftyShadeChapThree userName={userName} her={her} she={she} GoogYoo={GoogYoo} his={his} he={he} friendName={friendName} />) : null
  }
}

export default ChapterContent
