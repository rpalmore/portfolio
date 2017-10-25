import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from '../components/About.js';
import Contact from './Contact.js';
import Home from '../components/Home.js';
import Welcome from './Welcome.js';
import './Welcome.css';
// import './App2.css';


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

