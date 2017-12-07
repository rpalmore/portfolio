import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../components/Home.js';
import Welcome from './Welcome.js';
// import './App.css';
// import Footer from '../components/Footer.js';

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
