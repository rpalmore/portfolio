import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Home.css';
import About from './About.js';
import Contact from '../containers/Contact.js';
import Projects from './Projects.js';
import $ from "jquery";
import {Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import github from "../images/logos/github.png";
import twitter from "../images/logos/twitter.png";
import linkedin from "../images/logos/linkedin.png";
import Footer from './Footer.js';

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

  handleClick = () => {
     TweenLite.to(window, 1, 
      {scrollTo: {y:'.mainContainer'}, 
       autokill: false, 
       ease:Power4.easeOut
     });
  }

  render() {
    return (
      <Router>
        <div>
   	      <div className='wrapper'>
            <div className='containerLayer'></div>
            <div className='opaque'></div>
            <div className='headerBackground'>
              <div className='headerImage'>
              <div className='headerLayer'></div>
      	        <div className='header'>
      	          <Link className='tltHome nameLink' to='/home'>
                    rebecca palmore
                  </Link>
                  <div className='socialLinks'>
                    <Link to='https://github.com/rpalmore' target='_blank'>
                      <img className='socialIcons' src={github} alt={"Github"}/>
                    </Link>
                    <Link to='https://twitter.com/rebeccapalmore' target='_blank'>
                      <img className='socialIcons' src={twitter} alt={"Twitter"}/>
                    </Link>
                    <Link to='https://linkedin.com/in/rebecca-palmore' target='_blank'>
                      <img className='socialIcons' src={linkedin} alt={"LinkedIn"}/>
                    </Link>
                  </div>
      	        </div>
      	      </div>
            </div>

            <div className='menuContainer'></div>
            <div className='imageContainer'>
              <Link onClick={this.handleClick} to='/about'>
                <div className='about'>about</div>
              </Link>
		          <Link onClick={this.handleClick} to='/projects'>
		            <div className='projects'>projects</div>
	            </Link>
	            <Link onClick={this.handleClick} to='/contact'>
	              <div className='contact'>contact</div>
	            </Link>
	          </div>

	          <div className='mainContainer'>
		          <Route path="/about" component={About}/>
		          <Route path="/projects" component={Projects}/>
	            <Route path="/contact" component={Contact}/>
            </div>

          </div>
          
          <Footer />
        </div>
      </Router>
	  );
  }
}

export default Home;
