import React, { Component } from 'react';
import './About.css';
import Subnav from './Subnav.js';
// import profilePhoto from "../images/MixyCat.png";

class About extends Component {
  render() {
    return (
      <div>
        <Subnav section='about'/>
        <div className='sectionContainer'>

          <div className='sectionImage'></div>
          <div className='sectionLayer1'></div>
            
          <div className='sectionContainerInner'>
            <div className='contentContainer'>
      	      <div className='text'>
                {/*<img className="profilePhoto" src={profilePhoto} alt={"Rebecca Palmore Photo"}/>*/}
                <div className='resume'>
                  <a href="/RebeccaPalmore_Resume.pdf" className='resumeDownload' download>Resume<i className="fa fa-download fa-2x" aria-hidden="true"></i>
                  </a>
                </div>
                <p className='aboutIntro'>Well hello there!
                </p>

                <p>The short version: I’m a full-stack web developer with a background in journalism, first at the Chicago Tribune and now at <a className='highlight' href="http://chicagotonight.wttw.com/" target="_blank" rel="noopener noreferrer">WTTW-Channel 11</a>.
                </p>

	              <p>OK: Now the (slightly) longer version: I spent six months in 2017 studying web development at <a href="https://codingbootcamp.northwestern.edu/" target="_blank" rel="noopener noreferrer">Northwestern University’s Coding Bootcamp</a>, learning how to create and design websites, work with data and servers, develop apps and complete individual and group project milestones.
                </p>

	              <p>Since 2002 I’ve worked extensively on news websites in Chicago. I was always really interested in the technology behind the page: the database, the CMS, the CSS, the responsiveness, the UX. I learned what I could on my own, and worked with developers on countless projects as a client. I wanted to really study these things, but a computer science education seemed out of reach.
                </p>

                <p>Newsrooms really did prepared me for web development, where focus, intense attention to detail and quick problem-solving skills are essential. Bootcamp was hard, but it opened up a new world to me, and graduating the program was a huge boost to me, both personally and professionally.
                </p>

	              <p>Here, you’ll find class projects from the 24-week full-stack web development program at Northwestern (I’m still tinkering with BookLove).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;