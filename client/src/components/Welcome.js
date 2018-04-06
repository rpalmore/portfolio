import React, { Component } from 'react';
import './Welcome.css';
import {CSSPlugin} from 'gsap/CSSPlugin';
import {TweenLite} from "gsap/TweenLite";

const loadHome = () => {
  window.location.assign('/home');
};

class Welcome extends Component {

  componentDidMount() {
    //To do: Refactor this code
    TweenLite.to('.w', 2, {autoAlpha:1});
    TweenLite.to('.e3', 2, {autoAlpha:1, delay:.2});
    TweenLite.to('.l', 2, {autoAlpha:1, delay:.3});
    TweenLite.to('.c3', 2, {autoAlpha:1, delay:.4});
    TweenLite.to('.o', 2, {autoAlpha:1, delay:.5});
    TweenLite.to('.m', 2, {autoAlpha:1, delay:.6});
    TweenLite.to('.e4', 2, {autoAlpha:1, delay:.7});
    TweenLite.to('.welcomeLayer', 1, {autoAlpha:.3, delay:.7});
    TweenLite.to('.welcomeLayer', 2.2, {autoAlpha:1, delay:1.8});
    TweenLite.to('.w', 1, {autoAlpha:0, delay:1.8});
    TweenLite.to('.e3', 1, {autoAlpha:0, delay:1.9});
    TweenLite.to('.l', 1, {autoAlpha:0, delay:2});
    TweenLite.to('.c3', 1, {autoAlpha:0, delay:2.1});
    TweenLite.to('.o', 1, {autoAlpha:0, delay:2.2});
    TweenLite.to('.m', 1, {autoAlpha:0, delay:2.3});
    TweenLite.to('.e4', 1, {autoAlpha:0, delay:2.4});
    
    setTimeout(loadHome, 3000);
  };

  render() {
    return (
     <div className='welcomeBackground'>
       <div className='welcomeLayer'></div>
       <div className='welcomeText'>
          <span className='w'>W</span>
          <span className='e3'>e</span>
          <span className='l'>l</span>
          <span className='c3'>c</span>
          <span className='o'>o</span>
          <span className='m'>m</span>
          <span className='e4'>e</span>
       </div>
     </div>
    );
  }
}

export default Welcome;