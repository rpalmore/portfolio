import React, { Component } from 'react';
import './Welcome.css';
import $ from "jquery";
import 'raf/polyfill';
window.jQuery = window.$ = $;
require('textillate');
require('letteringjs');
require('animate.css');


const welcome = "Welcome";

const loadHome = () => {
    window.location.assign('/home');
  }

// const raf = require('raf')

//   raf(function tick() {
//   // Animation logic
//   raf(tick)
// });

$(document).ready(function(){
 console.log("Ready!");
  $(function () {
    $('.welcomeText').append(welcome);
    $('.tlt').textillate({
      loop: false,
      in : {
        effect: 'fadeIn',
        callback: function() {
            console.log("Inside callback");
            $('.tlt').textillate('out');
            $('.welcomeLayer').fadeTo(1200, 1);
          }
        },
      out: {
        effect: 'fadeOut',
      }
    })
  })

  $('.tlt').on('outAnimationEnd.tlt', function() {
    console.log("Out animation ended");
    setTimeout(loadHome, 200);
  });
});


class Welcome extends Component {

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
