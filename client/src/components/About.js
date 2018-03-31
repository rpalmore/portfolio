import React, { Component } from 'react';
import './About.css';
import Subnav from './Subnav.js';

// ADD "effect" to about intro for code to work
function ShowPhoto(props) {
  return "Hello!";
}

function ClosePhoto(props) {
  return "Close";
}

function PhotoDisplay(props) {
  const isShowingPhoto = props.isShowingPhoto;
  if (isShowingPhoto) {
    return <ClosePhoto />;
  }
  return <ShowPhoto />;
}

const componentClasses = ['contentContainerImage'];

const componentClassesText = ['text'];

class About extends Component {

  constructor () {
    super()
    this.state = {
      show: false,
      message: false
    }
  }

  toggleShow () {
    this.setState({
      show: !this.state.show,
      message: !this.state.message
    })
    if (!this.state.show) { componentClasses.push('show'); componentClassesText.push('textHide')}
    else { componentClasses.pop('show'); componentClassesText.pop('textHide')}
  } 


  render() {
    return (
      <div>
        <Subnav section='about'/>
        <div className='sectionContainer'>

          <div className='sectionImage'></div>
          <div className='sectionLayer1'></div>
            
          <div className='sectionContainerInner'>
            <div className='contentContainer'>
             <div className={componentClasses.join(' ')}></div>
      	      <div className={componentClassesText.join(' ')}>
                <div className='resume'>
                  <a href="/RebeccaPalmore_Resume.pdf" className='resumeDownload' download>Resume
                    <i className="fa fa-download fa-2x"></i>
                  </a>
                </div>
                <p onClick={this.toggleShow.bind(this)} className='aboutIntro'><PhotoDisplay isShowingPhoto={this.state.message} />
                </p>
                <p>I’m a full-stack web developer with a journalism background at the Chicago Tribune and now at <a className='effect' href="http://chicagotonight.wttw.com/" target="_blank" rel="noopener noreferrer">WTTW-Channel 11</a>.
                </p>

	              <p>In 2017 I spent six months studying web development at <a className='effect' href="https://codingbootcamp.northwestern.edu/" target="_blank" rel="noopener noreferrer">Northwestern University</a>, learning how to create and design websites, work with data and servers, develop apps and meet individual and group project milestones. 
                </p>

	              <p>Since 2002 I’ve worked extensively on news websites in Chicago. I was always interested in the technology behind the page, but a full-on computer science education seemed out of reach.
                </p>

                <p>Enter the age of bootcamps. Suddenly it seemed like a not-so-crazy pursuit.
                </p>

                <p>What I now know is that newsrooms and web development have a lot in common. Both require intense attention to detail, efficient communication and quick problem-solving skills. Bootcamp opened up a new world to me, and graduating the program was a personal and professional boost.
                </p>

	              <p>Here, you’ll find class projects from the 24-week full-stack coding bootcamp at Northwestern&mdash;I’m still tinkering with most of them&mdash;and new projects as I tackle them.
                </p>

                <p>Thanks for visiting!
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;