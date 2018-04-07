import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Home.css';
import asyncComponent from "./AsyncComponent";

import {TweenLite} from "gsap/TweenLite";
import {Power4} from "gsap/EasePack";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import github from "../images/logos/github.png";
import twitter from "../images/logos/twitter.png";
import linkedin from "../images/logos/linkedin.png";

// LAZY-LOADING 
const AsyncAbout = asyncComponent(() => import("./About.js"));
const AsyncContact = asyncComponent(() => import("./Contact.js"));
const AsyncProjects = asyncComponent(() => import("./Projects.js"));
const AsyncFooter = asyncComponent(() => import("./Footer.js"));


class Home extends Component {

  // To do: Refactor code
  componentDidMount() {
    TweenLite.to('.r', 2, {autoAlpha:1});
    TweenLite.to('.e', 2, {autoAlpha:1, delay:.3});
    TweenLite.to('.b', 2, {autoAlpha:1, delay:.5});
    TweenLite.to('.e2', 2, {autoAlpha:1, delay:.7});
    TweenLite.to('.c', 2, {autoAlpha:1, delay:.8});
    TweenLite.to('.c2', 2, {autoAlpha:1, delay:.9});
    TweenLite.to('.a', 2, {autoAlpha:1, delay:1});
    TweenLite.to('.palmore', 2, {autoAlpha:1, delay:1.2});
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
      	        <Link className='nameLink' to='/home'>
                 <span className='r'>r</span>
                 <span className='e'>e</span>
                 <span className='b'>b</span>
                 <span className='e2'>e</span>
                 <span className='c'>c</span>
                 <span className='c2'>c</span>
                 <span className='a'>a </span>
                 <span className='palmore'>palmore</span>
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
		          <Route path="/about" component={AsyncAbout}/>
		          <Route path="/projects" component={AsyncProjects}/>
	            <Route path="/contact" component={AsyncContact}/>
            </div>

          </div>
          
          <AsyncFooter />
        </div>
      </Router>
	  );
  }
}

export default Home;
