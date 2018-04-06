import React, { Component } from 'react';
import './Welcome.css';
import {CSSPlugin} from 'gsap/CSSPlugin';
import {TweenLite} from "gsap/TweenLite";
// import TextPlugin from "gsap/TextPlugin";


const loadHome = () => {
  window.location.assign('/home');
};

class Welcome extends Component {

  componentDidMount() {
    TweenLite.to('.welcomeText', 2, {autoAlpha:1});
    TweenLite.to('.welcomeText', 1, {autoAlpha:0, delay:2});
    TweenLite.to('.welcomeLayer', 2, {autoAlpha:.3, delay:1});
    TweenLite.to('.welcomeLayer', 1.3, {autoAlpha:1, delay:2});
    setTimeout(loadHome, 3500);
  };


  render() {
    return (
     <div className='welcomeBackground'>
       <div className='welcomeLayer'></div>
       <div className='tlt welcomeText'>Welcome</div>
     </div>
    );
  }
}

export default Welcome;
