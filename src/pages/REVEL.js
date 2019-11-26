import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/about.css'


//import PulseExample from '../components/pulseExample'


class REVEL extends React.Component {


  render() {
    return (
      <div>
          <div className="HeroAR" >

            <div className ="TextAR">
            <b> REVEL VR Startup</b>
              <br />
            <strong> February 2016 - March 2018</strong>

                <br />
        <p >Ever since VR entrepreneur Palmer Luckey presented his prototype of the Oculus Rift in 2012, and me backing it on Kickstarter, I felt like a VR-Evangelist. Even though it was only the first Developer Kit, I saw the initiate reaction of people, which was strengthening my believe in VR even more.
</p>



<div className ="REVELVIDEO">

<video loop autoPlay>
                            <source src={require('../../static/images/REVEL.mp4')} type="video/mp4"  />
                        </video>
    </div>
                        </div>

                        <div className ="TextAR">



<p> Still I was waiting for the first consumer ready VR-Headset. That happened to be Samsung’s Gear VR. Unfortunately, being a student meant I had to save up for quite a while before I had the chance to buy this headset.
I started using Oculus Social with my Gear VR, an application that allows users to socialize in a virtual environment, and immediately made a friend. We chatted for quite a while, before he invited me into a VR Group on WhatsApp. I knew a lot about the technology behind VR, so I was able to help others with tips & tricks and hands-on information on that group. After a week of doing this, Anouar contacted me on WhatsApp, asking if I wanted to be a part of Twisted Reality. </p>
<img className="profilAR" src = { require('../../static/images/Logo klein.png') }  />

<p>  From the start, I was really excited about us working hard to make Twisted Reality a successful movement. At that stage, our team still consisted of five members; we worked on exclusive game and app reviews and helped developers improve their creations. We even did some interviews with industry experts like Dr. Shafi Ahmed, the first doctor who ever broadcasted a live VR surgery. </p>


<img className="profilAR" src = { require('../../static/images/Prototype1.png') }  />
<p>Meanwhile, our movement, Facebook group and support was getting so big that it was hard to manage just by ourselves, especially since a few of our original members dropped out. Andre Berthiaume was incredibly active in our group and both Anouar and me felt a good entrepreneurial vibe between us, therefore we asked him to be part of our team which he was more than happy to do. He added the manpower and VR expertise that we needed at that point, making Twisted Reality a known entity in the Virtual Reality ecosystem.</p>
<img className="profilAR" src = { require('../../static/images/Prototype2.png') }  />
<p>A few months after establishing Twisted Reality, we started gathering ideas about creating our own, unique headset. Having built our own brand from the ground up, we had already gained the confidence to move forward quickly and to get a head start on a design that would be completely different from anything else available on the market. Made for technology aficionado’s but with fashionista’s in mind, we created REVEL: a stylish VR headset that fits any outfit, day or night. Bringing fashion tech to a new level!
</p>
<img className="profilAR" src = { require('../../static/images/Mockup1.png') }  />

                        </div>
                        </div>
  </div>

   )
    }
  }


export default REVEL
