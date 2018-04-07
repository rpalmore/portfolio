import React, { Component } from 'react';
import './SectionImage.css';

class SectionImage extends Component {

  componentDidMount() {
    window.TweenLite.to('.sectionImage', 2, {autoAlpha:1, delay:.3});
  };

  render() {
    return (
	  <div>
	    <div className='sectionImage'></div>
	  </div>
    )
  }
 };

export default SectionImage;

