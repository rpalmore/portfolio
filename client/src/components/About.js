import React, { Component } from 'react';
import './About.css';
import './SectionGeneral.css';
import Subnav from './Subnav.js';
import downloadsvg from "../images/fontawesome-5.0.9/advanced-options/raw-svg/solid/download.svg";

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

  componentDidMount() {
    window.TweenLite.to('.sectionImage', 2, {autoAlpha:1, delay:.3});
  };

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
                  <a href="/Palmore_Rebecca_Resume.pdf" className='resumeDownload' download>Resume
                    <img className="fas" src={downloadsvg} alt={"Download"}/>
                  </a>
                </div>
                <p onClick={this.toggleShow.bind(this)} className='aboutIntro'><PhotoDisplay isShowingPhoto={this.state.message} />
                </p>
                <p>I am inspired by the power of stories, the people who share them and the digital tools that bring them to life.
                </p>
                <p>My career in digital media started nearly 20 years ago at the Chicago Tribune. As a manager of news websites and the editorial teams behind them, I’ve learned how to deeply focus on the task at hand so I can meet deadlines while handling copy with care. Speed without accuracy is misdirected energy.
                </p>
                <p>In 2017, while leading the digital news team at <a className='effect' href="http://chicagotonight.wttw.com/" target="_blank" rel="noopener noreferrer">WTTW-Channel 11</a>, I completed my first full-stack coding bootcamp at <a className='effect' href="https://bootcamp.northwestern.edu/coding/" target="_blank" rel="noopener noreferrer">Northwestern University</a>, learning how to write programs using JavaScript, Node.js, React.js, MySQL, Express.js, APIs and more. Hello world! I was hooked.
                </p>
                <p>Now, I’m brushing up on programming fundamentals and learning new skills at <a className='effect' href="https://www.techelevator.com/" target="_blank" rel="noopener noreferrer">Tech Elevator</a> as I plan for a career in software development. I am so excited to see where this path leads, and I’m thrilled to have an opportunity to get back in the classroom first. I look forward to collaborating with other developers in a professional setting and continuing to grow as a technologist.
                </p>
                <p>Thank you for visiting!
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