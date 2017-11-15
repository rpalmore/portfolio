import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Back, Bounce, Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import './Navbar.css';

class Navbar extends Component {

  handleClick() {
    TweenLite.to(window, 1.5, {scrollTo: {y:'.sectionContainer', offsetY:-110}, ease:Power4.easeOut});
  }
  
  handleHomeClick() {
    TweenLite.to(window, 1, {scrollTo: {y:0}, ease:Power4.easeOut});
  }

  render() {
    return (
      <div className='secondaryNav'>
        <Link onClick={this.handleHomeClick} className='navLink' to='/home'><span>Top</span>
        </Link>
        <Link onClick={this.handleClick} className='navLink' to='/about'><span>About</span>
        </Link>
        <Link onClick={this.handleClick} className='navLink' to='/projects'><span>Projects</span>
        </Link>
        <Link onClick={this.handleClick} className='navLink' to='/contact'><span>Contact</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;