import React, { Component } from 'react';
import './Welcome.css';

const loadHome = () => {
  window.location.assign('/home');
};

class Welcome extends Component {

  componentDidMount() {
    //To do: Refactor this code
    // Add onReverseComplete or Reverse?
    // https://greensock.com/docs/TweenLite
    window.TweenLite.to('.w', 2, {autoAlpha:1});
    window.TweenLite.to('.e3', 2, {autoAlpha:1, delay:.2});
    window.TweenLite.to('.l', 2, {autoAlpha:1, delay:.3});
    window.TweenLite.to('.c3', 2, {autoAlpha:1, delay:.4});
    window.TweenLite.to('.o', 2, {autoAlpha:1, delay:.5});
    window.TweenLite.to('.m', 2, {autoAlpha:1, delay:.6});
    window.TweenLite.to('.e4', 2, {autoAlpha:1, delay:.7});
    window.TweenLite.to('.welcomeLayer', 1, {autoAlpha:.3, delay:.7});
    window.TweenLite.to('.welcomeLayer', 2.3, {autoAlpha:1, delay:2});
    window.TweenLite.to('.w', 1, {autoAlpha:0, delay:1.8});
    window.TweenLite.to('.e3', 1, {autoAlpha:0, delay:1.9});
    window.TweenLite.to('.l', 1, {autoAlpha:0, delay:2});
    window.TweenLite.to('.c3', 1, {autoAlpha:0, delay:2.1});
    window.TweenLite.to('.o', 1, {autoAlpha:0, delay:2.2});
    window.TweenLite.to('.m', 1, {autoAlpha:0, delay:2.3});
    window.TweenLite.to('.e4', 1, {autoAlpha:0, delay:2.4});
    setTimeout(loadHome, 3800);
  };

  render() {
    return (
     <div>
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
     </div>
    );
  }
}

export default Welcome;