import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Welcome from './Welcome.js';
import asyncComponent from "./AsyncComponent";
// Avoid FOUC by importing css here
import './Home.css';

const AsyncHome = asyncComponent(() => import("./Home.js"));

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome}/>
      <Route path="/home" component={AsyncHome}/>
      <Route path="/about" component={AsyncHome}/>
      <Route path="/projects" component={AsyncHome}/>
      <Route path="/contact" component={AsyncHome}/>
    </div>
  </Router>
  )
export default App;
