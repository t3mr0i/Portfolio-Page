import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/about.css'


//import PulseExample from '../components/pulseExample'


class AR extends React.Component {


  render() {
    return (
      <div>
          <div className="HeroAR" >

            <div className ="TextAR">
            <b> Augmented Reality Prototype</b>
              <br />
            <strong> February 2018 - February 2018</strong>

                <br />
        <p > I see Augmented Reality as one of the fastest growing techs in the last year.There is proof that Apple is working on their own AR Headset, combining that with their effort of making the Apple Watch standalone, we have a perfect fit right here. After scrolling a far too tiny bundesliga table on my Apple Watch it was obvious to me what my first project in AR would look like.</p>





<video loop autoPlay>
                            <source src={require('../../static/videos/ARReal.mp4')} type="video/mp4" />
                        </video>

                        </div>

                        <div className ="TextAR">



<p>              I have always been interested in the newest cutting edge technology and getting my hands dirty starting to work with it. So I was very keen on working with the SDK of ARKit. I ow the question was: What am I going to develop. Looking at my wrist and that tiny 1.65 inch screen, it was very clear to me, I wanted to make it bigger. </p>
<img className="profilAR" src = { require('../../static/images/Division.jpg') }  />

<p>  Now what you need to know about me is, that I love videogames. Not really playing them, but the whole industry and new developments. When I saw the announcement of „The Division“ something really grabbed my attention.<br />It's at the same time a small trip down memory lane. I remember those gigantic navigation cards for when my parents where traveling with me. Nowadays we look at a maximum 6 inch map and are constantly scrolling around on it. How about the best of both worlds? Navigation but on a map as big as your forearm? </p>


<img className="profilAR" src = { require('../../static/images/MapsWatch.png') }  />
<b> Use-Cases and first thoughts</b>
  <br />
  <p>
I started by asking myself initial questions.</p>
<ul> <li>What is the advantage of that?</li>
<li>Who would use it?</li>
<li>How can it be useful</li>
</ul>
<p>
<strong>More possible features.</strong>
Because of the bigger screen, more space can be used to implement more features on the watch that would otherwise be too small to make sense.
<br /><br />  <strong>A new standard.</strong> I am clearly aiming for the future with this prototype. While an Apple Watch is nothing new anymore, a different problem is eminent. It must be as friction free as possible. Using your phone to look at your watch is not. So it is aiming at a close future (2020-2021) in which Apple will launch their AR Headset. Then it would just become a part of the UI.
<br /> <br /> <strong>Standalone.</strong> . With apple clearly pushing for a phone less future and on the way of making the Apple Watch standalone, using this technique will be crucial for that. A small screen like on the watch is not enough in a lot of daily situations. </p>
<img className="profilAR" src = { require('../../static/images/SpotifyAR.png') }  />

                        </div>
                        </div>
                        </div>


   )
    }
  }


export default AR
