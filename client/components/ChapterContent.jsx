import React from 'react'
import FiftyShadeChapOne from './fifty/ChapOne'
import FiftyShadeChapTwo from './fifty/ChapTwo'
import FiftyShadeChapThree from './fifty/ChapThree'

const Components = {
  "fifty-shades-of-pink-1":FiftyShadeChapOne,
  "fifty-shades-of-pink-2":FiftyShadeChapTwo,
  "fifty-shades-of-pink-3":FiftyShadeChapThree};

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
    const Content = Components[`${this.props.story}-${this.props.chapter}`]
    return (
      <div>
      <Content userName={userName} her={her} she={she} GoogYoo={GoogYoo} his={his} he={he} friendName={friendName} />
      </div>
    )
  }
}

export default ChapterContent
