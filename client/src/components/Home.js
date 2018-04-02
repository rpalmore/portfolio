import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Home.css';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import $ from "jquery";
import {TweenLite} from "gsap/TweenLite";
import {Power4} from "gsap/EasePack";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import github from "../images/logos/github.png";
import twitter from "../images/logos/twitter.png";
import linkedin from "../images/logos/linkedin.png";
import Footer from './Footer.js';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,400', 'sans-serif']
  }
});

window.jQuery = window.$ = $;
require('textillate');
require('letteringjs');
require('animate.css');

class Home extends Component {

  componentDidMount() {
    let textillate = $.fn.textillate;
    $('.tltHome').textillate({
      loop: false,
      in: { 
        effect: 'flash',  
        shuffle: true
      } 
    })
  };

  handleClick = () => {
    TweenLite.to(window, 1, {scrollTo: {y:'.mainSectionContainer', x:0, autoKill: false, autoRound: false, force3D: true},
       ease: Power4.easeOut
     });
  };

  render() {
    return (
      <Router>
        <div>
   	      <div className='wrapper'>
          
            <div className='imageLayer2'></div>
            <div className='imageLayer3'></div>

            <div className='homeContainer'>
              <div className='homeImage'></div>
              <div className='imageLayer1'></div>
      	      <div className='header'>
      	        <Link className='tltHome nameLink' to='/home'>
                  rebecca palmore
                </Link>
                <div className='socialLinks'>
                  <Link to='https://github.com/rpalmore' target='_blank'>
                    <img className='socialIcons' src={github} alt={"Github"}/>
                  </Link>
                  <Link to='https://twitter.com/rebeccapalmore' target='_blank'>
                    <img className='socialIcons' src={twitter} alt={"Twitter"}/>
                  </Link>
                  <Link to='https://linkedin.com/in/rebecca-palmore' target='_blank'>
                    <img className='socialIcons' src={linkedin} alt={"LinkedIn"}/>
                  </Link>
                </div>
      	      </div>
            </div>

            <div className='menuBlock'></div>
            <div className='menuContainer'>
              <Link onClick={this.handleClick} to='/about'>
                <div className='sectionLinks'>about</div>
              </Link>
              <Link onClick={this.handleClick} to='/projects'>
                <div className='sectionLinks'>projects</div>
              </Link>
	            <Link onClick={this.handleClick} to='/contact'>
                <div className='sectionLinks'>contact</div>
              </Link>
	          </div>

	          <div className='mainSectionContainer'>
		          <Route path="/about" component={About}/>
		          <Route path="/projects" component={Projects}/>
	            <Route path="/contact" component={Contact}/>
            </div>

          </div>
          
          <Footer />
        </div>
      </Router>
	  );
  }
}

export default Home;
