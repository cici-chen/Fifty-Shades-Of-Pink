import React from 'react'
import {Link} from 'react-router-dom'

export default class ChapOne extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      userInfo: {
        Sabrina : this.props.userInfo.userName,
        her : this.props.userInfo.userGender === 'woman'? 'her':'his',
        she : this.props.userInfo.userGender === 'woman'? 'she':'he',
        Lily : this.props.userInfo.friendName === ''? 'Lily': this.props.userInfo.friendName,
        his : this.props.userInfo.loverGender === 'man'? 'his':'her',
        he : this.props.userInfo.loverGender === 'man'? 'he':'she',
        NewYork: 'New York',
        GongYoo: this.props.userInfo.loverName
      }
    }
  }

  render() {
    let {Sabrina, her, she, Lily, his, he, NewYork, GongYoo} = this.state.userInfo
    console.log("user data is being passed from app ", this.state)
    return(
      <div className="story-container">
        <h4>CHAPTER TWO</h4>
        <p>
          As the cab cruised through the streets of {NewYork} on this crisp morning, {Sabrina} felt a little bit calmer. {Lily} had her assistant text {Sabrina} the address of the photoshoot who would be bringing all the equipments.
        </p>
        <p>
          When {Sabrina} showed the cab driver the address, the driver recognized the address and said that it's the new luxurious residential coumpound in the city. He had dropped off a famous actress there before, and he wished that the marvelous gardens in there were open to the public, so that he could take his kids to see the exotic trees shipped from South America on the weekend.
        </p>
        <p>
          Time went by fast as they chatted, and before {Sabrina} realized, the car had stopped in front of two grandiose golden gates. The driver buzzed at the security intercom, and a soft-spoken voice came through.
        </p>
        <p>
          "Good morning. How can I help you?"
        </p>
        <p>
          Only until then had {Sabrina} realized that {she} didn't even know who was {she} meeting this morning. Fumbling on {her} phone, {Sabrina} found the text from {Lily}{"'"}s assitant.
        </p>
        <p>
          "Hi. I am meeting with Mr.{GongYoo} for a work appointment scheduled at 7am."
        </p>
        <p>
          As {Sabrina} said the name out loud, she thought to herself: Wait a minute, {GongYoo}, {he} has been on literally every single magazine cover in the last month. All of {her} friends have been gushing about how dreamy {he} is.
        </p>
        <p>
          {Sabrina} can not believe that {Lily} would trust {her} to shoot {GongYoo}. For a second {she} also imagined {her} friends screaming with OMG when they fidn out about this.
        </p>
        <p>
          "Let me see... Is this Ms{Lily}?" The voice from the intercom responded after a few seconds.
        </p>
        <p>
          "Yes." Sabrina responded with much uncomfortableness.
        </p>
        <p>
          "Great. Please come in and have the driver drop you off at the entrance by the fountain. I will see you in a second."
        </p>
        <p>
          As the intercom went silent the golden gates slowly opened its doors showing a grand drive way lined on both sides by tall plane trees.
        </p>
        <p>
          The security guard in black suits opened the taxi door for {Sabrina}, and led her to the glass elevator. When she stepped in the elevator and tried to press the floor buttons, she realized that she didn't know which floor she was going to. Just as she was going to ask the security guard, the button that writes "penthouse" lighted up.
        </p>
        <p>
          When the elevator doors opened again, {Sabrina} saw a giant painting in the style of Jackson Pollock on the wall, some velvet chairs around it, and fresh flowers on wood cupboards. It took her 10 seconds to realize that she was in the apartment already.
        </p>
        <p>
          A white boy in a green t-shirt and a pair of sports shorts walked towards {Sabrina}. "Hi there! I'm Matt." He shook her hands with a big smile on his face. "I'm {GongYoo}'s assistant. What's your name?"
        </p>
        <p>
          "Hey. I'm um {Lily}." {Sabrina} secretly wished that she wouldn't have to introduce herself too many times today. It felt very creepy to use her friend's name, not mentioning the quentional ethics behind it.
        </p>
        <p>
          "{GongYoo} will be here in a minute. We just finished a tennis match and {he} needs a shower," Matt said. "Would you like a beer?"
        </p>
        <p>
          "Ummmm. No thanks I'm not a good drinker. I will probably knock the cameras down after just a few sips." {Sabrina} replied with an apologetic smile.
        </p>
        <p>
          "Hahahaha" Matt laughed out loud. "I'm kidding of course! It's 7am in the morning lady! I'll get you a coffee yeah?"
        </p>
        <p>
          "Oh..." {Sabrina} also laughed, feeling embarrased. "Thank you. That would be great."
        </p>
        <Link to={"/chapter/1"}><button>Previous Chapter</button></Link>
        <Link to={"/chapter/3"}><button>Next Chapter</button></Link>
      </div>
    )
  }
}
