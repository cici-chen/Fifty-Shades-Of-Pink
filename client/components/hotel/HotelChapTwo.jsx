import React from 'react'
import {Link} from 'react-router-dom'


export default class HotelChapTwo extends React.Component{
  constructor(props) {
    super(props)

    let {userName, userGender, loverName, loverGender} = this.props.userInfo

    this.state={
      userInfo: {
        Ariel: userName,
        Micah: loverName,
        her: userGender === 'woman'? 'her':'his',
        she: userGender === 'woman'? 'she':'he',
        She: userGender === 'woman'? 'She':'He',
        his: loverGender === 'man'? 'his':'her',
        he: loverGender === 'man'? 'he':'she',
        He: loverGender === 'man'? 'He':'She'
      }
    }
  }

  render() {
    let {Ariel, Micah, her, she, She, his, he, He} = this.state.userInfo
    return(
        <div className='single-chapter'>
          <div className="story-container">
            <p>
              {Micah} crawled up the bed slowly, carefully placing {his} hands alongside {Ariel}{"’"}s curving body. {He} hovered just above {her}, lowering {his} head just enough to kiss {her} lips. As {Ariel} received the kiss, {she} ran {her} lightly over {Micah}{"'"} arms and {his} chest, wrapping around {his} shaft for a long, slow pull.
            </p>
            <p>
              {Micah} slipped {Ariel}{"'s"} sundress off, throwing it on the floor. {He} put {his} hands on {her} breast, squeezing its fullness and teasing {her} nipple. After lingering on {Ariel}{"'s"} breats for a while, {Micah} slid off {her} pink panties, revealing smooth skin as {he} ran {his} hand over {her} body. {Ariel} sighed with pleasure. {Micah}{"'s"} head dipped to where {his} hand had just been, feeling the smooth skin with {his} tongue and {his} lips, teasing open {her} body and tasting the warm liquid within.
            </p>
            <p>
              As {he} tongued and kissed {her} intimate parts, {Ariel} gave {her}self over to pleasure and relaxation. {She} could vaguely hear the hum of the city outside {her} window. {Micah}{"’s"} hands on {her} body, {his} gentle sucking on {her} cunt, his fingers probing into her led her to a state of bliss - not yet orgasm, but pleasure that she gratefully accepted as she lay on that fluffy white bed.
            </p>
            <p>
              {Micah} couldn’t stand it any longer - her smell, her taste and her sounds. Sitting on the bed on his knees, he pulled her body toward his, sliding her lower body onto his thighs as her cunt met his cock, slowly drawing it inside. He stayed there for a moment, then just as slowly withdrew his cock almost its full length before plunging back in.
            </p>
            <p>
              {Ariel} laid on her back, letting {Micah} make love to her body. She let him worship her, watched as he licked his thumb and stroked her clit as his cock massaged her from the inside. She closed her eyes again as the pleasure radiated through her body, driving her toward that cliff edge that she hoped would come soon, but then hoped it wouldn’t, because this moment felt so good she didn’t want it to ever end.
            </p>
            <p>
              But her pleasure continued to climb and it took willpower for her to just lay back and relax and let her body follow {Micah}{"'s"} rhythm. Her orgasm came over in waves, like it always did, but much softer and longer, and she rode that pleasure as {Micah} did, and he came with her.
            </p>
            <p>
              {Micah} placed {Ariel}{"'s"} hips back on the bed and sunk his weight on top of her, cradling her head in his arms and placing a deep, lingering kiss on her lips. The air conditioner hummed faintly in the background.
            </p>
          </div>
          <p> The End </p>
          <Link to="/story-library"><button className='next-chapter'>Read Another Story</button></Link>
        </div>
    )
  }
}
