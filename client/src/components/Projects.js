import React, { Component } from 'react';
import './Projects.css';
import Subnav from './Subnav.js';
import { Link } from 'react-router-dom';
import plaudit from "../images/plaudit.jpg";
import bookLove from "../images/booklove.png";
import videoGladiators from "../images/gladiator.jpg";

class Projects extends Component {
  render() {
    return (
      <div className='sectionContainer'>
        <div className='sectionContainerInner'>
          {/*<div className='sectionImage'></div>*/}

          <Subnav section='projects' />

          <div className='sectionImageLayerFull'></div>
          <div className='projectsLayerPartial'></div>
          <div className='projectsContainer'>
            <div className='overlay'></div>

            {/* === PROJECT ONE === */}

            <div className='projectColumn'>
              <div className='projectColumnLayer'>

                <div className='projectText'>
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

            <div className='projectColumn'>
              <div className='projectColumnLayer'>

                <div className='projectText'>
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

            <div className='projectColumn'>
              <div className='projectColumnLayer'>

                <div className='projectText'>
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
    );
  }
}

export default Projects;