import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import github from "../images/logos/github.png";
import twitter from "../images/logos/twitter.png";
import linkedin from "../images/logos/linkedin.png";

class Header extends Component {

  // To do: Refactor code
  componentDidMount() {
    window.TweenLite.to('.r', 2, {autoAlpha:1, delay:.1});
    window.TweenLite.to('.e', 2, {autoAlpha:1, delay:.2});
    window.TweenLite.to('.b', 2, {autoAlpha:1, delay:.3});
    window.TweenLite.to('.e2', 2, {autoAlpha:1, delay:.4});
    window.TweenLite.to('.c', 2, {autoAlpha:1, delay:.5});
    window.TweenLite.to('.c2', 2, {autoAlpha:1, delay:.6});
    window.TweenLite.to('.a', 2, {autoAlpha:1, delay:.7});
    window.TweenLite.to('.palmore', 2, {autoAlpha:1, delay:.8});
  };

  render() {
    return (
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
          <a href='https://github.com/rpalmore' target='_blank'>
            <img className='socialIcons' src={github} alt={"Github"}/>
          </a>
          <a href='https://twitter.com/rebeccapalmore' target='_blank'>
            <img className='socialIcons' src={twitter} alt={"Twitter"}/>
          </a>
          <a href='https://linkedin.com/in/rebecca-palmore' target='_blank'>
            <img className='socialIcons' src={linkedin} alt={"LinkedIn"}/>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
