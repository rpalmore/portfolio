import React, { Component } from 'react';
// import './Welcome.css';
import $ from "jquery";
import Background from '../images/cloudsLR.jpg';
require('textillate');
require('letteringjs');
require('animate.css');
window.jQuery = window.$ = $;


const welcome = "Welcome";

const loadHome = () => {
  window.location.assign('/home');
};

const containerStyle = {
  backgroundImage: `url(${Background})`,
  backgroundColor: '#048BA8',
  position: 'absolute',
  width: '100%',
  height: '100%'
};

const layerStyle = {
  background: '#048BA8',
  opacity: 0.6,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 1000
};

const textStyle = {
  position: 'absolute',
  right: 0,
  left: 0,
  margin: 'auto',
  top: '35%',
  width: '100%',
  textAlign: 'center',
  fontSize: '3rem',
  color: '#ffffff',
  fontFamily: "'Lato', sans-serif",
  fontWeight: 400,
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
     <div style={containerStyle}>
       <div style={layerStyle}></div>
       <div style={textStyle} className='tlt welcomeText'></div>
     </div>
    );
  }
}

export default Welcome;
