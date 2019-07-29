import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/index.css'
import Card from '../components/card';



class Index extends React.Component {

  
  

    
  render() {
    return (
     <div>
  <div className="Test">
    <div className="Hero" >
      <div className="HeroGroup" >
        <h1 > <b> Hi, I 'm Kai</b> <br />
          I 'm a UX/UI designer + programmer  <br /> living in <b> Bremen </b></h1 >
          <p > I 'm passionate about everything digital. <br/>Especially creating unique user experiences. I am looking for a place to cooperate with like minded people to create something awesome.<br/>You can find me on Linkedin or shoot me an email. </p>
  
  
  
        </div>
      </div>
      
      </div>
          

    <div className="Cards">
      <h2>Some of my works</h2>
      <div className="CardGroup">
        <Card 
          link="/about.js"
          title="Corporate Identity"
          text="Dream Machine"
          image='../images/DreamMachine.png' />
        <Card 
        link="https://www.behance.net/gallery/57691747/DTV-Devils-Teamlogo"
          title="Logos"
          text="DTV DEVILS"
          image='/images/Devils.png' />
        <Card 
        link="https://www.amazon.de/Kai-Detmers-Tee-Helfer/dp/B079W9RDSM"
          title="Smart Home"
          text="Alexa Skill Teehelfer"
          image='/images/TeeHelfer.png' />
        <Card 
        link="http://wiki.selfhtml.org/wiki/href"
          title="VR Startup"
          text="REVEL"
          image='/images/kleiner.png' />
           <Card 
           link="http://wiki.selfhtml.org/wiki/href"
          title="Biggest VR Blog in Benelux"
          text="TwistedReality"
          image='/images/Logo klein.png' />
      </div>
    
    
   
  <footer className="footer">
    <p>Made with &hearts; by Kai Detmers <br />Feel free to contact me! I’m always available to bounce thoughts around and I'd love to collaborate.</p>
  </footer>

   </div>
   </div>
   )
    }
  }
  
            
export default Index