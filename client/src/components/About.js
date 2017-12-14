import React, { Component } from 'react';
import './About.css';
import Subnav from './Subnav.js';
import Footer from './Footer.js';


class About extends Component {
  render() {
    return (
        <div className='sectionContainer'>
          <div className='sectionImage'></div>
          <Subnav section='about'/>
          <div className='sectionImageLayerFull'></div>
          <div className='sectionImageLayerPartial'></div>
          <div className='textContainer'>
      	    <div className='text'>
              <div className='resume'>
                <a className='resumeDownload' href="/RebeccaPalmore_Resume.pdf" download>Resume<i className="fa fa-download fa-2x" aria-hidden="true"></i></a>
              </div>
              <p>Hello! Thanks for visiting. I’ve been a full-stack web developer since 2017, and a multimedia journalist and editor since 2002.</p>

	            <p>Fast-paced newsrooms unwittingly prepared me for web development, where focus, intense attention to detail and quick problem-solving skills are essential, and a curious mind powers the need to look under the hood and find out how stuff works.</p>

	            <p>As a recent graduate of <a href="https://codingbootcamp.northwestern.edu/" target="_blank" rel="noopener noreferrer">Northwestern University’s Coding Bootcamp</a>, I’ve been immersed in learning how things work, from front-end design to data storage. Working with React, Express, JavaScript and Node.js&mdash;among other languages, libraries and frameworks&mdash;has been hugely challenging, but with each project or in-class activity, there is immense satisfaction. I’m excited to build on my skills, and continue to refine class projects now that the bootcamp has ended.</p>

	            <p>As a digital editor at <a href="http://wttw.com/chicagotonight" target="_blank" rel="noopener noreferrer">Chicago Tonight at WTTW-Channel 11</a>, I manage a small, driven team of reporters, produce compelling stories for digital platforms, edit and program a news website and&mdash;as many in my field do at all hours of the day and night&mdash;obsess over metrics.</p>

	            <p>Here, you’ll find class projects and homework from the 24-week full-stack web development program at Northwestern. I'll add new projects as I build them.</p>
            </div>
          </div>
         {/*<Footer />*/}
	      </div>
    );
  }
}

export default About;