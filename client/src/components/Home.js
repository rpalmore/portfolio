import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'
import './Home.css';
// import Welcome from '../containers/Welcome.js'

class Home extends Component {
  render() {
    return (
      <div className='container'>
       <div className='headerBackground'>
        <div className='headerImage'>
        <div className='headerLayer'>
      	 <div className='header'>
      	  <Link className='nameLink' to='/home'>Rebecca Palmore</Link>
      	 </div>
      	 </div>
        </div>
       </div>
      </div>
	);
  }
}

export default Home;
