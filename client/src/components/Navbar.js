import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {TweenMax, Back, Bounce, Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
// import About from './About.js';
// import Contact from '../containers/Contact.js';
// import Projects from './Projects.js';
// import './Projects.css';


class Navbar extends Component {

  handleClick() {
    TweenLite.to(window, 1.5, {scrollTo: {y:'.sectionContainer', offsetY:10}, ease:Power4.easeOut});
  }

  handleClickTop() {
    TweenLite.to(window, .8, {scrollTo: {y:0}, ease:Power4.easeOut});
  }

  render() {
    return (
      <div>
        <Link onClick={this.handleClickTop} className='secondaryNav' to='/home'>
          <div className='homeSecondNav'>top</div>
        </Link>
        <Link onClick={this.handleClick} className='secondaryNav' to='/about'>
          <div className='aboutSecondNav'>about</div>
        </Link>
        <Link onClick={this.handleClick} className='secondaryNav' to='/projects'>
           <div className='projectsSecondNav'>projects</div>
        </Link>
        <Link onClick={this.handleClick} className='secondaryNav' to='/contact'>
           <div className='contactSecondNav'>contact</div>
        </Link>
      </div>
    );
  }
}

export default Navbar;