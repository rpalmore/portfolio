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

                <p>I’m a full-stack web developer with a background in journalism at the Chicago Tribune and now at <a className='effect' href="http://chicagotonight.wttw.com/" target="_blank" rel="noopener noreferrer">WTTW-Channel 11</a>.
                </p>

	              <p>How I got here: I spent six months in 2017 studying web development at <a className='effect' href="https://codingbootcamp.northwestern.edu/" target="_blank" rel="noopener noreferrer">Northwestern University</a>, learning how to create and design websites, work with data and servers, develop apps and complete individual and group project milestones.
                </p>

	              <p>Why? Since 2002 I’ve worked extensively on news websites in Chicago. I was always really interested in the technology behind the page: the code, the styling, the database, the CMS, the responsiveness, the UX. I learned what I could on my own, and worked with developers on countless projects as a client. I wanted to really study these things, but a full-on computer science education seemed out of reach.
                </p>

                <p>Enter the age of bootcamps. I was immediately intrigued and applied as soon as I found out about Northwestern’s new program. Suddenly it seemed like a not-so-crazy pursuit.
                </p>

                <p>And ... What I now know is that newsrooms really did prepare me for web development. Both require focus, intense attention to detail and quick problem-solving skills. Bootcamp was really hard, but it opened up a new world to me, and graduating the program was a personal and professional boost.
                </p>

	              <p>Here, you’ll find class projects from the 24-week full-stack coding bootcamp at Northwestern&mdash;I’m still tinkering with most of them&mdash;and new projects as I tackle them.
                </p>

                <p>Thanks for visiting!
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