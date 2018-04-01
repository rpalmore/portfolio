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

$(document).ready(function(){

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
