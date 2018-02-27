import React, { Component } from 'react';
import './Welcome.css';
import $ from "jquery";
window.jQuery = window.$ = $;
require('textillate');
require('letteringjs');
require('animate.css');


const welcome = "Welcome";

const loadHome = () => {
  window.location.assign('/home');
}

// For older IE browsers
function runOutAnimation() {
  $('.welcomeLayer').fadeTo(1200, 1);
  $('.welcomeText').fadeTo(1200, 0);
  window.setTimeout(loadAltHome, 1200);
};

function loadAltHome() {
  window.location.assign('/home');
};

$(document).ready(function(){

/*@cc_on
  // conditional IE < 9 only fix
  @if (@_jscript_version <= 9)
  var timeoutID = window.setTimeout(runOutAnimation, 1200);
  @end
 @*/

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

  $('.tlt').on('inAnimationEnd.tlt', function() {
    console.log("In animation ended");
    $('.tlt').textillate('out');
    $('.welcomeLayer').fadeTo(1200, 1);
  });

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
