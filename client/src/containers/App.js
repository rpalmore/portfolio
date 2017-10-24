import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom'
import About from '../components/About.js';
import Contact from './Contact.js';
import './App.css';
// import './App2.css';

import $ from "jquery";
window.jQuery = window.$ = $;
require('textillate');
require('letteringjs');
require('animate.css');


var animation = false;


$(document).ready(function(){
 console.log("Ready!");
  $(function () {
    $('.tlt').textillate({
      loop: false,
      in : {
        effect: 'fadeIn',
        callback: function() {
            $('.tlt').textillate('out');
            $('.layer').fadeTo(1200, 1);
            // setTimeout(loadHome, 1500);

        }
      },
      out: {
        effect: 'fadeOut',
      }
    })
  })

   // $('.tlt').on('end.tlt', function () {
   //    console.log("Animation ended");
   //      // alert("Done!");
   //      setTimeout(loadHome, 1500);
   //    });

      $('.tlt').on('outAnimationEnd.tlt', function () {
        console.log("Out animation ended");
        // animation = true; // this doesnt impact anything
        // console.log(animation);
        // alert("Done!");
        setTimeout(loadHome, 1000);
      });

  function loadHome() {
    window.location.assign('/home');
  }
});

const Welcome = () => (
  <div className='background'>
   <div className='layer'>
    <div className='tlt welcomeText'>Welcome</div>
   </div>
  </div>
)



const Home = () => (
  <div className='homeBackground'>
  </div>
)


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Projects = ({ match }) => (
  <div>
    <h2>Projects</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const myRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>
)
export default myRoutes;

