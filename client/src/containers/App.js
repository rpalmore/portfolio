import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from '../components/About.js';
import Contact from './Contact.js';
import './App.css';

const Home = () => (
  <div className="rebeccaFont">
   <p>rebecca palmore</p>
  </div>
)

// const Test= () => (
//   <div>
//     <h2>Test</h2>
//   </div>
// )

// This also works:
///////////////////
// const About = () => (
//       <div> 
//         <li><a href="/index">Activity Feed</a></li>
//         <li><a href="/givebadge">Give a Badge!</a></li>
//         <li><a href="/logout">Log Out</a></li>
//       </div>
// )

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
     <div className="app">
      <header className="app-header">
       <div className="one">
       </div>
       <div className="two">
       </div>
        <div className="nameDiv">
         <Link className="rebeccaFont" to="/">rebecca palmore</Link>
        </div>
        <div className="three">
       </div>
       <div className="four">
       </div>
        <div className="links">
          <Link className="about" to="/about">About</Link>
          <Link className="contact" to="/contact">Contact</Link>
          <Link className="projects" to="/projects">Projects</Link>
        </div>
      </header>
     </div>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>
)
export default myRoutes;


// import React, { Component } from 'react';
// import logo from './images/logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
