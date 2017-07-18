import React from 'react'
import FiftyShadeChapOne from './fifty/ChapOne'
import FiftyShadeChapTwo from './fifty/ChapTwo'
import FiftyShadeChapThree from './fifty/ChapThree'
import FiftyShadeChapFour from './fifty/ChapFour'

const Components = {
  "fifty-shades-of-pink-1":FiftyShadeChapOne,
  "fifty-shades-of-pink-2":FiftyShadeChapTwo,
  "fifty-shades-of-pink-3":FiftyShadeChapThree,
  "fifty-shades-of-pink-4":FiftyShadeChapFour
};

class ChapterContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: this.props.userName,
      loverName: this.props.loverName,
      herher:this.props.userGender === 'woman' ? 'her' : 'him',
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
        : 'she',
      man: this.props.loverGender === 'man' ? 'man' : 'woman',
      Mr:this.props.loverGender === 'man' ? 'Mr.' : 'Ms.'
    }
  }

  render() {
    let {
      userName,
      herher,
      her,
      she,
      loverName,
      his,
      he,
      friendName,
      man,
      Mr
    } = this.state
    const Content = Components[`${this.props.story}-${this.props.chapter}`]
    return (
      <div>
      <Content userName={userName} herher={herher} her={her} she={she} loverName={loverName} his={his} he={he} friendName={friendName} man={man} Mr={Mr} />
      </div>
    )
  }
}

export default ChapterContent
