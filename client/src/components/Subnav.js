import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Subnav.css';

class Subnav extends Component {

  handleClick = () => {
    window.TweenLite.to(window, 1, {scrollTo: {y:0, autoKill: false, autoRound: false, force3D: true}, 
      ease: window.Power4.easeOut
     });
  };

  render() {
    return (
      <div>
        <div className='sectionHeaderLayer'></div>
        <div className='sectionHeaderContainer'>
          <div className='sectionHeaderNavigation'>
            <div className='sectionTitle'>
              {this.props.section}
            </div>
            <Link className='returnTop' onClick={this.handleClick} to='/home'>
              top
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Subnav;