import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'
import './Home.css';
// import Welcome from '../containers/Welcome.js'

import $ from "jquery";
window.jQuery = window.$ = $;
require('textillate');
require('letteringjs');
require('animate.css');


$(document).ready(function(){
 console.log("Ready!");
  $(function () {
  	$('.tltHome').textillate({ 
  		in: { 
  			effect: 'flash',  
  			shuffle: true 
  		} 
  	});
  })
});

class Home extends Component {
  render() {
    return (
     <div>
      <div className='container'>
       <div className='containerLayer'></div>
       <div className='opaque'></div>
       <div className='headerBackground'>
        <div className='headerImage'>
         <div className='headerLayer'>
      	  <div className='header'>
      	   <Link className='tltHome nameLink' to='/home'>Rebecca Palmore</Link>
      	  </div>
      	 </div>
      	</div>
       </div>
      </div>
      <div className='menuContainer'></div>
       <div className='imageContainer'>
	      <div className='about'></div>
	      <div className='projects'></div>
	      <div className='contact'></div>
	   
      </div>
     </div>
	);
  }
}

export default Home;
