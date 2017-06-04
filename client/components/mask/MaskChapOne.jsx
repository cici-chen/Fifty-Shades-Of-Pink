import React from 'react'
import {Link} from 'react-router-dom'


export default class HotelChapOne extends React.Component{
  constructor(props) {
    super(props)

    let {userName, userGender, loverName, loverGender, friendName} = this.props.userInfo

    this.state={
      userInfo: {
        Sabrina: userName,
        Micah: loverName,
        her: userGender === 'woman'? 'her':'his',
        she: userGender === 'woman'? 'she':'he',
        his: loverGender === 'man'? 'his':'her',
        he: loverGender === 'man'? 'he':'she',
        Jessica: friendName
      }
    }
  }

  render() {
    let {her, she, his, he} = this.state.userInfo
    return(
        <div>
          <div className="story-container">
            <p>
              "What the hell am I going to wear?" {Sabrina} wail, throwing yet another little black dress on the floor. Collapsing on her best friend {Jessica}{"'s"} double bed, {Sabrina} groans and covers {her} face with one of the many cushions.

              Taking a deep breath, {Jessica} begins picking up the discarded LBDs littering her plush cream bedroom carpet. "You can borrow something of mine," she offers generously. "And don't pull that face."

              {Sabrina} rolls her eyes. "I doubt I'll fit into any of your clothes. It's like Kim Kardashian offering to lend Beth Ditto her latest bandage dress."

              {Jessica} throws the cushion on {Sabrina}{"'s"} head. "You look amazing and you know it."

              Despite having a perfectly fine figure, {Sabrina} started hitting the gym hard six months ago and swapped wine o'clock for weight reps. The result? A toned body and an obsession with {her} personal trainer. Lying on the floor while having being streched by {her} trainer has left {her} hot and flustered in more ways than one at the gym.

              Thoughts of {her} trainer kneeling in front of {her} and pushing {her} leg up in the air flit across {Sabrina}{"'s"} mind and straight into {her} knickers. {Sabrina} was lost in day dreaming until {Jessica} chucks yet another cushion at {her}.

              Thinking about {Jessica}'s 30th birthday party tonight, {Sabrina} can't help but feel a glimmer of hope. There could be a few hot single men there – one She could maybe actually kiss, instead of just fantasising about. After all, it's not going to be a disco at the trashy bar they always go to with cheap beers. With multi-millionaire parents, {Jessica} is marking the occasion with a masked ball at the family home – a beautiful, country house in Surrey. Hence my wardrobe crisis…

              "Here, try this," Jessica says.

              "Woah!" I gasp. "I can't…" Jess is holding a beautiful strapless, emerald green, full-length dress in her arms. I take it from her and quickly strip to my bra and knickers before I can loose my nerve.

              "Zip me up, quickly before I change my mind," I say. As the zip goes up, I smooth it down over my hips and know it's the One.

              "You look stunning, hon,"' Jess smiles. "All the men will be wondering who the girl in the green dress with the green eyes is."

              I pick up the mask I bought off the internet the week before and hold it up to my face. Black velvet, it does draw attention to my green eyes and will look dramatic with my long blonde hair too. While Jess will be spending most the night on the arm of her long-term boyfriend, Mark, I'm flying solo. Yet again.

              "I really must check your final guest list for single men," I say. "You never know."

              "It's with my parents now," Jessica says. "So god knows who they've added at the last minute – some dull old bloke business friends, I bet."

              "Well, I've got first dibs on any eligible bachelors," I say. "As long as they're under 40."
            </p>
          </div>
          <Link to="/stories/behind-the-mask/chapter/2"><button>Next Chapter</button></Link>
        </div>
    )
  }
}
