import React, { Component } from 'react';
import './Projects.css';
import Subnav from './Subnav.js';
import { Link } from 'react-router-dom';
import plaudit from "../images/plaudit.jpg";
import bookLove from "../images/booklove.png";
import videoGladiators from "../images/gladiator.jpg";
import {TweenLite} from "gsap/TweenLite";

class Projects extends Component {

  componentDidMount() {
    TweenLite.to('.sectionImage', 2, {autoAlpha:1, delay:.3});
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
                      Plaudit!
                    </div>
                  </div>
                  <div className='projectLinks'>
                    <Link className='projectLinkLive' to='https://plauditlive.herokuapp.com/' target='_blank'>
                      <div className='boxLeft'>
                        Live
                      </div>
                    </Link>
                    <Link className='projectLinkGithub' to='https://github.com/rpalmore/TeamAllCaps/blob/master/README.md' target='_blank'>
                      <div className='boxRight'>
                        Github
                      </div>
                    </Link>
                  </div>
                </div>
                <img className="projectImage" src={plaudit} alt={"Plaudit"}/>
              </div>

              {/* === PROJECT TWO === */}

              <div className='projectItem'>
                <div className='projectItemLayer1'></div>
                <div className='projectItemLayer2'>
                  <div className='projectDetails'>
                    <div className='projectName'>
                      Book Love
                    </div>
                  </div>
                  <div className='projectLinks'>
                    <Link className='projectLinkLive' to='https://booklovelive.herokuapp.com/' target='_blank'>
                      <div className='boxLeft'>
                        Live
                      </div>
                    </Link>
                    <Link className='projectLinkGithub' to='https://github.com/rpalmore/BookLove/blob/master/README.md' target='_blank'>
                      <div className='boxRight'>
                        Github
                      </div>
                    </Link>
                  </div>
                </div>
                <img className="projectImage" src={bookLove} alt={"Book Love"}/>
              </div>

              {/* === PROJECT THREE === */}

              <div className='projectItem'>
                <div className='projectItemLayer1'></div>
                <div className='projectItemLayer2'>
                  <div className='projectDetails'>
                    <div className='projectName'>
                      Video Gladiators
                    </div>
                  </div>
                  <div className='projectLinks'>
                    <Link className='projectLinkLive' to='https://warm-shore-89552.herokuapp.com/' target='_blank'>
                      <div className='boxLeft'>
                        Live
                      </div>
                    </Link>
                    <Link className='projectLinkGithub' to='https://github.com/rpalmore/Video-Gladiators/blob/master/README.md' target='_blank'>
                      <div className='boxRight'>
                        Github
                      </div>
                    </Link>
                  </div>
                </div>
                <img className="projectImage" src={videoGladiators} alt={"Video Gladiators"}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;