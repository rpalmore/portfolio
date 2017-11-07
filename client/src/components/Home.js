import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Home.css';
import About from './About.js';
import Contact from '../containers/Contact.js';
import Projects from './Projects.js';
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
    <Router>
   	<div>
      <div className='container'>
        <div className='containerLayer'></div>
        <div className='opaque'></div>
        <div className='headerBackground'>
          <div className='headerImage'>
            <div className='headerLayer'></div>
      	    <div className='header'>
      	      <Link className='tltHome nameLink' to='/home'>rebecca palmore</Link>
      	    </div>
      	  </div>
        </div>
      </div>

      <div className='menuContainer'></div>
      <div className='imageContainer'>
	    <Link className='nav' to='/about'>
		  <div className='about'>about</div>
		</Link>
	    <Link className='nav' to='/projects'>
	      <div className='projects'>projects</div>
	    </Link>
	    <Link className='nav' to='/contact'>
	      <div className='contact'>contact</div>
	    </Link>
	  </div>
	     
	  <Route path="/about" component={About}/>
	  <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>

    </div>
    </Router>
	);
  }
}

export default Home;
