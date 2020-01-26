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
         link="/AR"
          title="Augmented Reality"
          text="Watch OS/iOS"
          image='../images/MapsWatch.png' />
        <Card
        link="https://www.behance.net/gallery/57691747/DTV-Devils-Teamlogo"
          title="Illustrator Logos"
          text="DTV DEVILS"
          image='/images/Devils.png' />
        <Card
        link="https://www.homeandsmart.de/alexa-skill-tee-helfer"
          title="Smart Home"
          text="Alexa Skill Teehelfer"
          image='/images/TeeHelfer.png' />

        <Card
         link="https://www.youtube.com/watch?v=mJ9X260NkJQ"
          title="Unreal"
          text="PacBeard"
          image='../images/unreal.png' />
        <Card
         link="https://www.youtube.com/watch?v=EhEs9E86DxE&feature=youtu.be"
          title="Unity VR"
          text="VRock"
          image='../images/VRROCK.png' />

<Card
         link="https://www.youtube.com/watch?v=XSHMqxWMvUw&feature=youtu.be"
          title="Unity VR"
          text="VR Juggling"
          image='../images/ogimg.jpg' />

        <Card
        link="/REVEL"
          title="VR Startup"
          text="REVEL"
          image='/images/kleiner.png' />
           <Card
           link="https://www.facebook.com/groups/SocialVR/?ref=bookmarks"
          title="Biggest VR Blog in Benelux"
          text="SocialVR"
          image='/images/TR.png' />
          <Card
         link="https://www.heise.de/make/meldung/Interaktive-Lampen-zum-Anfassen-die-Ausstellung-Leuchte-in-Bremen-3249332.html?hg=1&hgi=3&hgf=false"
          title="Arduino"
          text="SmartLamp"
          image='../images/EnlightLogo.png' />
           <Card
         link="https://www.youtube.com/watch?v=qvqvz7TR3ek"
          title="Tangible Interfaces"
          text="Enlight Timer"
          image='../images/Enlight.jpeg' />

          <Card
         link="http://temroi.de/Convention.html"
          title="Bootstrap"
          text="Event Page"
          image='../images/Bootstrap.png' />
      </div>



  <footer className="footer">
    <p>Made with &hearts; by Kai Detmers <br />Feel free to contact me! I would love to have a chat about all tech topics.</p>
  </footer>

   </div>
   </div>
   )
    }
  }


export default Index
