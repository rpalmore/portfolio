import React, { Component } from 'react';
// import {
//   Link
// } from 'react-router-dom';
import './Footer.css';
import github from "../images/logos/github.png";

class Footer extends Component {
  render() {
    return (  
      <footer>
        <div className='footerLayer'></div>
        <a href='https://github.com/rpalmore/portfolio' rel='noopener noreferrer' target='_blank'>
          <img className='portfolioGithub' src={github} alt={"Github"}/>
        </a>
        <div className='copyright'>
          Created and maintained by Rebecca Palmore
        </div>
      </footer>
    );
  }
}
export default Footer;