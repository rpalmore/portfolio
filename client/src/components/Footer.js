import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import './Footer.css';
import github from "../images/logos/github.png";

class Footer extends Component {
  render() {
    return (         
      <div className='footerContainer'>
        <div className='footerImage'></div>
        <div className='footerLayer'></div>
        <footer>
          <div className='copyright'>
              Created and maintained by Rebecca Palmore
          </div>
          <Link to='https://github.com/rpalmore/portfolio' target='_blank'>
              <img className='portfolioGithub' src={github} alt={"Github"}/>
          </Link>
        </footer>
      </div>
    );
  }
}

export default Footer;