import React, { Component } from 'react';
import './Welcome.css';
import $ from "jquery";
window.jQuery = window.$ = $;
require('textillate');
require('letteringjs');
require('animate.css');


$(document).ready(function(){
 console.log("Ready!");
  $(function () {
    $('.tlt').textillate({
      loop: false,
      in : {
        effect: 'fadeIn',
        callback: function() {
            $('.tlt').textillate('out');
            $('.welcomeLayer').fadeTo(1200, 1);
          }
        },
      out: {
        effect: 'fadeOut',
      }
    })
  })

  $('.tlt').on('outAnimationEnd.tlt', function () {
    console.log("Out animation ended");
    setTimeout(loadHome, 200);
  });

  function loadHome() {
    window.location.assign('/home');
  }
});

class Welcome extends Component {
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
