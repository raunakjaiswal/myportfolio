
import './App.css';

import React, { useEffect, useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import raunak from './raunak.jpg'
import Typewriter from 'typewriter-effect'
import cimg from './ttt.png'
import javaimg from './javaimg.png';
import mysqlimg from './mysqlimg.png';
import htmlimg from './htmlimg.png'
import reactimg from './reactimg.png'
import firebaseimg from './firebaseimg.png';
import Nodejsimg from './Nodejsimg.png';
import vscodeimg from './vscodeimg.png';
import netbeansimg from './netbeansimg.png';
import socomonimg from './socomonimg.png';
import mealsimg from './mealsimg.jpeg'
import vaccineimg from './vaccineimg.jpeg'
import emarketimg from './emarketimg.png';
import womensafetyimg from './womensafetyimg.jpeg';
import AOS from 'aos'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from "react-icons/ai";
import Educomp from './component/education';
import Skillscomp from './component/skills';
import "aos/dist/aos.css";
import Projectscomp from './component/projects';
function App() {

  const [colorchange, setcolorchange] = useState({
    aboutme: true,
    education: false,
    skills: false,
    projects: false
  })

  const changeNavbarColor = () => {
    console.log(window.scrollY)
    if (window.scrollY < 600) {
      setcolorchange({ ...colorchange, aboutme: true, projects: false, education: false, skills: false })
    }
    else if (window.scrollY >= 600 && window.scrollY < 1300) {
      setcolorchange({ ...colorchange, aboutme: false, education: true, projects: false, skills: false })
    }
    else if (window.scrollY >= 1300 && window.scrollY < 1849) {
      setcolorchange({ ...colorchange, education: false, skills: true, aboutme: false, projects: false });
    }
    else if (window.scrollY >= 1849) {
      setcolorchange({ ...colorchange, skills: false, projects: true, education: false, aboutme: false })
    }

  };
  useEffect(() => {

    window.addEventListener('scroll', changeNavbarColor);
    AOS.init({
      duration: 1000
    });
    AOS.refresh();

  }, []);


  // window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <section style={{ backgroundColor: '#10100a', height: 70, display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, paddingLeft: '5px', paddingRight: '50px' }}>
          <div style={{ display: 'inline-block', }}>
            <h1 className="namecss" style={{ color: 'white', fontSize: 50, padding: '10px', fontWeight: 'lighter' }}>Raunak jaiswal</h1>
          </div>
          <div style={{ display: 'inline-block' }}>
            <ul style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', listStyle: 'none' }}>
              <li className={colorchange.aboutme ? 'headertext navbarcolor' : 'headertext navbarwhite'} style={{
                marginLeft: 20, marginRight: 20, fontSize: 30, cursor: 'pointer'
              }} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}  >About Me</li>
              <li className={colorchange.education ? 'headertext navbarcolor' : 'headertext navbarwhite'} style={{ marginLeft: 20, marginRight: 20, fontSize: 30, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 690, left: 0, behavior: 'smooth' })}>Education</li>
              <li className={colorchange.skills ? 'headertext navbarcolor' : 'headertext navbarwhite'} style={{
                marginLeft: 20, marginRight: 20, fontSize: 30, cursor:
                  'pointer'
              }} onClick={() => window.scrollTo({ top: 1380, left: 0, behavior: 'smooth' })} >Skills</li>
              <li className={colorchange.projects ? 'headertext navbarcolor' : 'headertext navbarwhite'} style={{
                marginLeft: 20, marginRight: 20, fontSize: 30, cursor:
                  'pointer'
              }} onClick={() => window.scrollTo({ top: 1830, left: 0, behavior: 'smooth' })}>Projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#10100a' }}>
        <section style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#10100a', flex: 1, flexWrap: 'wrap', }}>

          <section style={{ flex: 3, marginTop: '10px', paddingTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20%', marginRight: '5%' }}>

              <h1 className="text" style={{ fontSize: 40, maxWidth: 'fit-content', color: 'white' }}>
                Hi<span class="wave">👋</span>, I'm Raunak



              </h1>
              <h1 className="text" style={{ fontSize: 40, maxWidth: 'fit-content', marginTop: 0, color: 'white' }}>

                <Typewriter

                  options={{

                    autoStart: true,
                    loop: true,

                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString("I am a Developer.").pauseFor(200).deleteChars(10).typeString("Programmer.").pauseFor(200).deleteAll().typeString("Love exploring Technologies.").start();
                  }}
                />

              </h1>
              <p className="text" style={{ fontSize: 22, color: 'white', fontWeight: '500' }}>
                Building apps, websites , exploring various ideas and technologies.<br />
                Greatly Enthusiastic about cloud Technology and Artificial Intelligence .
              </p>
              <p className="text" style={{ fontSize: 22, color: 'white', fontWeight: '500' }}>
                In my free time, you can catch me listening music, playing chess,<br />
                or taking part in competive programming contests.
              </p>

            </div>
            <div style={{ display: 'inline-flex', marginLeft: '20%', marginRight: '15%', marginBottom: '25px', cursor: 'pointer' }} onClick={() => window.open('https://www.dropbox.com/s/y7hvtxttxqcbkz2/Raunakjaiswal_resume.pdf?dl=0')} >
              <h1 style={{ color: '#7cf739', fontSize: 20, fontWeight: 'normal', borderRadius: '3px', border: '0.5px solid #7cf739', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '40px', paddingRight: '40px' }}> Resume</h1>
            </div>

          </section>

          <section style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', paddingTop: '50px' }}>
            {/* <h1>profile pic</h1> */}

            <Avatar
              style={{ border: "2px solid gray", margin: 10, height: 400, width: 400, opacity: 0.9 }}
              alt="pic1"
              src={raunak}
            />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'centre' }}>

              <AiFillGithub size={60} color="white" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => window.open('https://github.com/raunakjaiswal')} />
              <AiFillMail size={60} color="white" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => window.open('mailto:raunakjaiswal.hajipur@gmail.com')} />
              <AiFillLinkedin size={60} color="white" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/raunak-jaiswal-857ab11a7/')} />
              <AiFillInstagram size={60} color="white" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => window.open('https://www.instagram.com/coz_its_raunak/')} />
              <AiFillTwitterCircle size={60} color="white" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => window.open('https://twitter.com/RaunakJ28845402')} />

            </div>
          </section>

        </section>


        <section style={{ display: 'flex', flexDirection: 'column', marginLeft: '12%', marginRight: '9%', backgroundColor: '#10100a' }}>
          {/* //education */}
          <h1 className="headertext" style={{ color: 'white', fontSize: 40, fontWeight: '600', marginBottom: '10px' }}>Education</h1>
          <Educomp name="Indian Institute of Information Technology, Vadodara" course="Bachelor of Technology in Computer Science" timestamp="2019-2023" marks="Current CPI:  8.70" />
          <Educomp name="Sri  Chaitaniya Techno School, Vishakhapatnam" course="Senior Secondary Education, Class 12" timestamp="2017-2019" marks="Percentage:  91.8" />
          <Educomp name="St Paul's High School, Hajipur" course="Secondary Education, Class 10" timestamp="2017" marks="CGPA:  9.6" />

        </section>

        <section style={{ display: 'flex', flexDirection: 'column', marginLeft: '12%', marginRight: '9%', backgroundColor: '#10100a' }}>
          <h1 className="headertext" style={{ color: 'white', fontSize: 40, fontWeight: '600' }}>Skills</h1>
          <section data-aos="flip-up" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <Skillscomp image={cimg} name="C/C++" />
            <Skillscomp image={javaimg} name="java" />
            <Skillscomp image={mysqlimg} name="Mysql" />
            <Skillscomp image={htmlimg} name="Html" />
            <Skillscomp image={firebaseimg} name="Firebase" />
            <Skillscomp image={reactimg} name="React/React Native" />
            <Skillscomp image={Nodejsimg} name="Nodejs" />
            <Skillscomp image={netbeansimg} name="Netbeans" />
            <Skillscomp image={vscodeimg} name="Vscode" />
          </section>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', marginLeft: '12%', marginRight: '9%', backgroundColor: '#10100a' }} >
          <h1 className="headertext" style={{ color: 'white', fontSize: 40, fontWeight: '600' }} > Projects</h1>

          <section data-aos="zoom-in-up" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* className="zoom-in-out-box"  */}

            <Projectscomp link="https://github.com/raunakjaiswal/Socomon" image={socomonimg} dataaos="zoom-in-left" header="SOCIAL MEDIA WEB APPLICATION" tools="Html, Css, Expressjs, Socket.io, Mysql, Handlebars" points={["This website allows users to display their skills in different fields including photography, art and craft, quotations, among others", " Chat functionality using web sockets in real-time", "  The users can make friends, like and comment on posts"]} />

            <Projectscomp link="https://github.com/raunakjaiswal/vaccinslot" image={vaccineimg} dataaos="zoom-in-right" header="VACCINE SLOT CHECKER APP" tools="React Native, API" points={["This App allows users to check availability of vaccine slots according to their pin code.", "The Cowin API is used to fetch data about slot availability."]} />

            <Projectscomp link="https://github.com/raunakjaiswal/MyShop" image={mealsimg} dataaos="zoom-out-right" header="GROCERY APP" tools="React Native, Firebase" points={[" This application allows users to add food items to their carts and place an order.", "Additional features include tracking delivery status and checking previous orders."]} />

            <Projectscomp link="https://github.com/raunakjaiswal/E-Market-India/tree/master" image={emarketimg} dataaos="zoom-out-left" header="E-COMMERCE DESKTOP APPLICATION" tools="Java, OOPs, Mysql" points={[" Developed this application in which business owners can sell their product and customers can buy it.", "  The project was developed using object-oriented programming"]} />

            <Projectscomp link="https://github.com/raunakjaiswal/Women-Safety-Bharat" image={womensafetyimg} dataaos="zoom-out" header="WOMEN SAFETY APP" tools="Flutter, Firebase" points={[" A woman in need can use this application to share her current location with people within a 3km radius.", " The current location will be sent to people through the mail.", " Flutter’s Geolocation plugin is used to track the current location."]} />
          </section>
        </section>

        <section style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '0.1px dotted #5b5c5a' }}>
            <h1 className="headertext" style={{ color: 'white', fontSize: 25, margin: '10px', fontWeight: 'lighter' }}>Developed and Designed with <span style={{ color: '#e01507', fontSize: 30, }}>♥️</span> by &#169; Raunak jaiswal 2021 </h1>
          </div>
        </section>
      </section>
    </>
  );
}


export default App;
