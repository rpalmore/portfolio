import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import './Subnav.css';

class Subnav extends Component {

  handleClick = () => {
    TweenLite.to(window, .5, {scrollTo: 0});
  }

  render() {
    return (
      <div>
        <div className='sectionHeaderLayer'></div>
        <div className='sectionHeaderContainer'>
          <div className='sectionHeaderNavigation'>
            <div className='sectionTitle'>
              {this.props.section}
            </div>
            <Link onClick={this.handleClick} className='returnTop' to='/home'>
              top
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Subnav;