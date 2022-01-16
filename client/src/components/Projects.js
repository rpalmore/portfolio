import React, { Component } from 'react';
import './Projects.css';
import Subnav from './Subnav.js';
// import { Link } from 'react-router-dom';
import plaudit from "../images/plaudit.jpg";
import bookLove from "../images/booklove.png";
import videoGladiators from "../images/gladiator.jpg";
import tenmo from "../images/tenmo.jpg";

class Projects extends Component {

  componentDidMount() {
    window.TweenLite.to('.sectionImage', 2, {autoAlpha:1, delay:.3});
  };

  render() {
    return (
      <div>
        <Subnav section='projects' />
        <div className='sectionContainer'>
        
          <div className='sectionImage'></div>
          
          <div className='sectionContainerInner'>
            <div className='contentContainer'>

            {/* === PROJECT ONE === */}

              <div className='projectItem'>
                <div className='projectItemLayer1'></div>
                <div className='projectItemLayer2'>
                  <div className='projectDetails'>
                    <div className='projectName'>
                      TEnmo
                    </div>
                  </div>
                  <div className='projectLinks'>
                    <a className='projectLinkGithub' href='https://github.com/rpalmore/te_capstone_tenmo' rel='noopener noreferrer' target='_blank'>
                      <div className='gitOnly'>
                        Github
                      </div>
                    </a>
                  </div>
                </div>
                <img className="projectImage" src={tenmo} alt={"TEnmo"}/>
              </div>

              {/* === PROJECT TWO === */}

              <div className='projectItem'>
                <div className='projectItemLayer1'></div>
                <div className='projectItemLayer2'>
                  <div className='projectDetails'>
                    <div className='projectName'>
                      Plaudit!
                    </div>
                  </div>
                  <div className='projectLinks'>
                    <a className='projectLinkLive' href='https://plauditlive.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                      <div className='boxLeft'>
                        Live
                      </div>
                    </a>
                    <a className='projectLinkGithub' href='https://github.com/rpalmore/TeamAllCaps/blob/master/README.md' rel='noopener noreferrer' target='_blank'>
                      <div className='boxRight'>
                        Github
                      </div>
                    </a>
                  </div>
                </div>
                <img className="projectImage" src={plaudit} alt={"Plaudit"}/>
              </div>

              {/* === PROJECT THREE === */}

              <div className='projectItem'>
                <div className='projectItemLayer1'></div>
                <div className='projectItemLayer2'>
                  <div className='projectDetails'>
                    <div className='projectName'>
                      Book Love
                    </div>
                  </div>
                  <div className='projectLinks'>
                    <a className='projectLinkLive' href='https://booklovelive.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                      <div className='boxLeft'>
                        Live
                      </div>
                    </a>
                    <a className='projectLinkGithub' href='https://github.com/rpalmore/BookLove/blob/master/README.md' rel='noopener noreferrer' target='_blank'>
                      <div className='boxRight'>
                        Github
                      </div>
                    </a>
                  </div>
                </div>
                <img className="projectImage" src={bookLove} alt={"Book Love"}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;