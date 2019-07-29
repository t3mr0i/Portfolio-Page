import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/about.css'

import Card from '../components/card';
//import PulseExample from '../components/pulseExample'


class About extends React.Component {

  
  render() {
    return (
<div>
  <div className="Test">
    <div className="Hero" >
    </div>
      
      <img className="profil" src = { require('../../static/images/Ich.png') }  />    
      <div className ="Text">
      <b> Hello</b>
          <br />
        <p > I’m Kai Detmers, a digital designer and programmer living in Bremen, Germany. Digital Media was my passion ever since I got my first computer when I was six. A new world opened and semed to open door after door during the years, VR, AI or now AR. That is what I love about the industry, it is ever changing. To keep up with the industry (and my biggest hooby), I listen to audiobooks or podcasts and simply meeting likeminded people on conferences. I would love to get in touch with you to talk about digital media topics.  </p>
  
</div>

<img id="image2" className="profil" src = { require('../../static/images/REVEL.png') }  />    

<div id="Text" className ="Text">
        <p ><b> I love Virtual Reality</b>
          <br />

When the first Oculus Rift came out, I was among the first who backed it on Kickstarter. Now I own a Facebook Group about mobile VR with around 3.000 members. Albeit being a rather small community and the hype dying down, I see it as the future of computing. </p>
  
</div>
        
      
      </div>
     
   
    
      </div>
     
 
    
   )
    }
  }
  
            
export default About