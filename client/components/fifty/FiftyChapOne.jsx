import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default class FiftyChapOne extends React.Component{
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
      },
      chapter: null
    }
  }

  render() {
    let {Sabrina, her, she, Lily, his, he, NewYork, GongYoo} = this.state.userInfo
    return(
        <div >
          <div className="story-container">
            <p>
              {Sabrina} woke up this morning being damn annoyed at {her} hair. It always looks like a mess after a night's sleep. But this morning is particularly stressful because {she} is running late to a meeting, a meeting which {she} didn't sign up for. Early this morning {Sabrina} got a phone call from {her} friend {Lily} who is an internationally renowned photographer.
            </p>
            <p>
              {Lily} apparently drank way too much at a gallery opening and had been throwing up all night. There was not way that {Lily} could make it to a photoshoot scheduled today.
            </p>
            <p>
              "Why can't you just postpone it?" {Sabrina} asked while still half asleep.
            </p>
            <p>
              "Dude I wish I could duh! I called my assisant. But this person is apparently some big shot, and {his} schedule is ridiculously unflexible. The shoot was apparently scheduled 3 months ago and {he} is flying to another country this afternoon. Vogue will kill me if I mess up their magazine cover photo." said {Lily}
            </p>
            <p>
              "What?! This is for Vogue? And it's the cover photoshoot? Is this a joke? You are telling me that you want me to pretend to be you and shoot a cover for Vogue? Have you lost your mind?" {Sabrina} was shocked by {her} friend's request.
            </p>
            <p>
              "You will be fine. I have seen portraits you've shot on your instagram. You have amazing athestics, and a natural grasp on light and framing. I know a great photographer when I see one. I will photoshop the photos afterwards. I've been doing this for a long time. Trust me, you will be fine." {Lily} said affirmatively.
            </p>
            <p>
              "Um... No thanks. I can not handle this kind of pressure." {Sabrina} was not convinced.
            </p>
            <p>
              "Pleaseeee pleassseee. Just think of it this way. No matter how bad a job you do, it can not be worse than my not having photos at all.. I'm begging you. If I mess this up Vogue will never gives me gigs again. And they pay me well. I really need this. You know that I've been working really hard to have enough saving to open my own gallery." {Lily} started to choke on the other end of the phone.
            </p>
            <p>
              "Ahhh. I can't believe I'm saying this... But OK. I'll go. Send me the address." Somestimes {Sabrina} really wish {she} knew how to say no to a crying friend.
            </p>
            <p>
              In a hurry, {Sabrina} threw on a lightblue cotton shirt and a pair of jeans, and jumped into a taxi.
            </p>
          </div>
          <Link to="/stories/fifty-shades-of-pink/chapter/2"><button>Next Chapter</button></Link>
        </div>
    )
  }
}
