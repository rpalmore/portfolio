import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../components/Home.js';
import Welcome from './Welcome.js';
import About from '../components/About.js';
import Contact from './Contact.js';
import Projects from '../components/Projects.js';


const App = () => (
  <Router>
  <div>
    <Route exact path="/" component={Welcome}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={Home}/>
    <Route path="/projects" component={Home}/>
    <Route path="/contact" component={Home}/>
  </div>
  </Router>
  )
export default App;
