import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Home.css';
import './SectionGeneral.css';
import Header from './Header.js';
import asyncComponent from "./AsyncComponent";

const AsyncAbout = asyncComponent(() => import("./About.js"));
const AsyncContact = asyncComponent(() => import("./Contact.js"));
const AsyncProjects = asyncComponent(() => import("./Projects.js"));
const AsyncFooter = asyncComponent(() => import("./Footer.js"));

class Home extends Component {

  componentDidMount() {
    window.TweenLite.to('.wrapper', .8, {autoAlpha:1});
  };

  handleClick = () => {
    window.TweenLite.to(window, 1, {scrollTo: {y:957, x:0, autoKill: false, autoRound: false, force3D: true},
       ease: window.Power4.easeOut
     });
  };

  render() {
    return (
      <Router>
        <div>
   	      <div className='wrapper'>
          
            <div className='imageLayer2'></div>
            <div className='imageLayer3'></div>

            <div className='homeContainer'>
              <div className='homeImage'></div>
              <div className='imageLayer1'></div>
              <Header />
            </div>

            <div className='menuBlock'></div>
            <div className='menuContainer'>
              <Link onClick={this.handleClick} to='/about'>
                <div className='sectionLinks'>about</div>
              </Link>
              <Link onClick={this.handleClick} to='/projects'>
                <div className='sectionLinks'>projects</div>
              </Link>
	            <Link onClick={this.handleClick} to='/contact'>
                <div className='sectionLinks'>contact</div>
              </Link>
	          </div>

	          <div className='mainSectionContainer'>
		          <Route path="/about" component={AsyncAbout}/>
		          <Route path="/projects" component={AsyncProjects}/>
	            <Route path="/contact" component={AsyncContact}/>
            </div>

          </div>
          
          <AsyncFooter />
        </div>
      </Router>
	  );
  }
}

export default Home;
