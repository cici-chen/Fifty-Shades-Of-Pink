import React from 'react'
import {Link} from 'react-router-dom'


export default class HotelChapOne extends React.Component{
  constructor(props) {
    super(props)

    let {userName, userGender, loverName, loverGender} = this.props.userInfo

    this.state={
      userInfo: {
        Ariel: userName,
        Micah: loverName,
        her: userGender === 'woman'? 'her':'his',
        she: userGender === 'woman'? 'she':'he',
        his: loverGender === 'man'? 'his':'her',
        he: loverGender === 'man'? 'he':'she'
      }
    }
  }

  render() {
    let {Ariel, Micah, her, she, his, he} = this.state.userInfo
    return(
        <div>
          <div className="story-container">
            <p>
            The hotel room was a white dream of cleanliness. The coolness of the air conditioner tickled {Ariel}{"’"}s skin as {she} lay on the soft mattress, surrounded by pillows, sinking further into the thick, downy duvet. The blanket puffed up around {her}, as if {she} were floating on a cloud.
            </p>
            <p>
            From the bed, {she} could see out the window into the harbour, framed by snow-capped mountains. The sun was setting, casting a warm yellow hue across the city outside.
            </p>
            <p>
            {Ariel} closed {her} eyes and smiled, {her} hair cascading over the edge of the bed. {Ariel} thought, I could lay here forever.
            </p>
            <p>
            Someone opened the door of the room. {Ariel} sat up and saw {Micah} walking in with a bottle of champagne in {his} hands. With a smile on {his} face and without speaking a word, {Micah} poured {Ariel} a glass and approached the bed.
            </p>
            <p>
            {Micah} handed {Ariel} the glass, and lifted {her} cotton sundress up, revealing {her} smooth legs and the hint of the curve of her ass. {Ariel} could see {Micah}{"'s"} cock hardening under his pants.
            </p>
            <p>
            {Micah} placed a hand gently on {Ariel}{"'s"} ankle and sliding it up {her} calf, where {he} leaned down to place a gentle, but lingering kiss. {Micah} looked at {her} face as {he} dragged {his} fingertips along {her} leg. {Ariel} murmured, {she} smiled with {her} eyes closed.
            </p>
            <p>
            {Micah} gently but firmly grappled {Ariel}{"'s"} legs, spreaded them apart, and kissed up {her} inner thigh as {his} hand caressed the other. {Ariel} shifted, letting {her} legs open further as {Micah} placed kisses on {her} light pink, cotton panties.
            </p>
            <p>
            Laying on {her} back, {Ariel} lazily stretched her arms up, then tilted her head to the side to look at the top of {Micah}{"'"} head. {Ariel} ran {her} fingers through {his} soft hair, and {he} smiled up at {her}. {Micah}{"'s'"} face is clean shaven after {his} shower, {Ariel} could feel {his} smooth skin rubbing against {her} thigh.
            </p>
          </div>
          <Link to="/stories/hotel-room/chapter/2"><button>Next Chapter</button></Link>
        </div>
    )
  }
}
