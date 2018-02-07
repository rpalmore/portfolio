import React, { Component } from 'react';
import './Welcome.css';
import $ from "jquery";
import 'raf/polyfill';
window.jQuery = window.$ = $;
require('textillate');
require('letteringjs');
require('animate.css');

let modernBrowser = true;

const welcome = "Welcome";

const loadHome = () => {
  window.location.assign('/home');
}

const runOutAnimation = () => {
  $('.tlt').textillate('out');
  $('.welcomeLayer').fadeTo(1200, 1);
  console.log(modernBrowser);
  window.setTimeout(loadHome, 1200);
}

$(document).ready(function(){

  /*@cc_on
    // conditional IE < 9 only fix
    @if (@_jscript_version <= 9)
    let modernBrowser = false;
    @end
  @*/

 console.log("Ready!");
  $(function () {
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
  })

  if (modernBrowser == false) {
    $('.tlt').on('inAnimationBegin.tlt', function() {
      console.log("In animation begins");
      const timeoutID = window.setTimeout(runOutAnimation, 1200);
    });
  } else {
    $('.tlt').on('inAnimationEnd.tlt', function() {
      console.log("In animation ended", modernBrowser);
      $('.tlt').textillate('out');
      $('.welcomeLayer').fadeTo(1200, 1);
    });

    $('.tlt').on('outAnimationEnd.tlt', function() {
      console.log("Out animation ended");
      setTimeout(loadHome, 200);
    });
  }
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
