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
                <p>
                “You made the right decision.”
                </p>
                <p>
                In the fall of 2021, I left my job at <a className='effect' href="https://news.wttw.com/" target="_blank" rel="noopener noreferrer">WTTW</a>, the PBS affiliate in Chicago, to pursue a career in software engineering via a 14-week bootcamp at <a className='effect' href="https://www.techelevator.com/" target="_blank" rel="noopener noreferrer">Tech Elevator</a>. This was my now-or-never time, I decided, and the stakes were high: I was leaving behind a 19-year career in local media that started with the entertainment site Metromix.com at the Chicago Tribune and ended with a fantastic team of reporters and producers at Channel 11.
                </p>
                <p>
                I wasn’t sure what to expect but I also wasn’t exactly new to bootcamps. In 2017, I completed a six-month, part-time course in full-stack development at <a className='effect' href="https://bootcamp.northwestern.edu/coding/" target="_blank" rel="noopener noreferrer">Northwestern University</a>. I had a few interviews after graduating from that program but somehow didn’t feel ready for the big switch. (It didn’t help that I still had a fulfilling job in journalism.) This time, I had to make it work. I was now unemployed and looking to trade in my manager card for a job as a junior&mdash;an associate starting out in a new field. I was more than OK with that.
                </p>
                <p>Tech Elevator was intense and challenging. I loved it&mdash;but I also struggled with self-doubt. One day, after freezing up during an exam, my instructor, Margaret Green, told me that I had made the right decision&mdash;that I was more than capable and belonged in the industry. What a gift those words were to me.
                </p>
                <p>Four weeks after graduating from Tech Elevator, I got a job offer in my new, chosen field, a 12-month program for new engineers at <a className='effect' href="https://www.optum.com/" target="_blank" rel="noopener noreferrer">Optum Technology</a> that would include two six-month rotations on different teams before a final placement in the company. When my first rotation ended in the fall of 2022, my supervisor said those same words to me: You made the right decision. He couldn’t have known how much those five words mean to me.
                </p>
                <p>It’s been important to me&mdash;maybe overly so&mdash;to feel that I belong in this industry. Now that I’ve landed that first job, I want to encourage other bootcamp students&mdash;and other women, and other career-changers&mdash;to take that leap of faith. To trust their instincts. To make the bet.
                </p>
                <p>
                I’m so grateful for the support I’ve received&mdash;and still receive&mdash;as I lean into this new role. I have a lot to learn, but I do know one thing: I made the right decision.
                </p>
                {/* <p>I am inspired by the power of stories, the people who share them and the digital tools that bring them to life.
                </p>
                <p>My career in digital media started nearly 20 years ago at the Chicago Tribune. As a manager of news websites and the editorial teams behind them, I’ve learned how to deeply focus on the task at hand so I can meet deadlines while handling copy with care. Speed without accuracy is misdirected energy.
                </p>
                <p>In 2017, while leading the digital news team at <a className='effect' href="http://chicagotonight.wttw.com/" target="_blank" rel="noopener noreferrer">WTTW-Channel 11</a>, I completed my first full-stack coding bootcamp at <a className='effect' href="https://bootcamp.northwestern.edu/coding/" target="_blank" rel="noopener noreferrer">Northwestern University</a>, learning how to write programs using JavaScript, Node.js, React.js, MySQL, Express.js, APIs and more. Hello world! I was hooked.
                </p>
                <p>Now, I’m brushing up on programming fundamentals and learning new skills at <a className='effect' href="https://www.techelevator.com/" target="_blank" rel="noopener noreferrer">Tech Elevator</a> as I plan for a career in software development. I am so excited to see where this path leads, and I’m thrilled to have an opportunity to get back in the classroom first. I look forward to collaborating with other developers in a professional setting and continuing to grow as a technologist.
                </p> */}
                <p>Thank you for visiting my site.
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