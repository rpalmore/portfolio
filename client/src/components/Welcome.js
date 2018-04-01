import React, { Component } from 'react';
import './Welcome.css';
import $ from "jquery";
require('textillate');
require('letteringjs');
require('animate.css');
window.jQuery = window.$ = $;

const welcome = "Welcome";

const loadHome = () => {
  window.location.assign('/home');
};

class Welcome extends Component {

  componentDidMount() {
    let textillate = $.fn.textillate;
    $('.welcomeText').append(welcome);
    $('.tlt').textillate({
      loop: false,
      in: {
        effect: 'fadeIn'
        },
      out: {
        effect: 'fadeOut'
      }
    })

    $('.tlt').on('inAnimationEnd.tlt', function() {
      $('.tlt').textillate('out');
      $('.welcomeLayer').fadeTo(1200, 1);
    });

    $('.tlt').on('outAnimationEnd.tlt', function() {
      setTimeout(loadHome, 200);
    });
  }

  render() {
    return (
     <div className='welcomeBackground'>
       <div className='welcomeLayer'></div>
       <div className='tlt welcomeText'></div>
     </div>
    );
  }
}

export default Welcome;
