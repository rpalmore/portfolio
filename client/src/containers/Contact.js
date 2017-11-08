import React, { Component } from 'react';
import helpers from '../utils/helpers';
import './Contact.css';
import Navbar from '../components/Navbar.js';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      	name: "",
      	email: "",
      	message: "" 
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
   }

  handleSubmit(event) {
    event.preventDefault();
    helpers.postSendEmail(this.state.name, this.state.email, this.state.message);
   }

  render() {
    return (
      <div>
       
        <form onSubmit={this.handleSubmit}>
          <input id="name" type="name" value={this.state.name} onChange={this.handleChange} placeholder="Your name" className="validate" required />
          <input id="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email" className="validate" required />
          <input id="message" type="message" value={this.state.message} onChange={this.handleChange} placeholder="Your message" className="validate" required />
          <button type="submit">Submit</button>
        </form>
        <h3 className="sectionTitle">About Me</h3>
        <p><b><a href="/RebeccaPalmore_Resume.pdf" download>Download my resume</a></b></p>
        <p>Hi! I’m Rebecca. Thanks for checking out my portfolio. I’ve been a full-stack web developer since 2017, and a multimedia journalist and editor since 2002.</p>

        <p>Fast-paced newsrooms unwittingly prepared me for web development, where focus, intense attention to detail and quick problem-solving skills are essential, and a curious mind is what powers that need to look under the hood to try and answer a question that dogs so many of us: <i>How does it work?</i></p>

        <p>As a recent graduate of <a href="https://codingbootcamp.northwestern.edu/" target="_blank" rel="noopener noreferrer">Northwestern University’s Coding Bootcamp</a>, I’ve been immersed in learning how things work, from front-end design to server-side logic. Working with React, Express, JavaScript and Node.js&mdash;among other techonologies&mdash;has been hugely challenging, but with each project or in-class activity, there is immense satisfaction. I’m excited to build on my skills, and continue to refine class projects now that the bootcamp has ended.</p>

        <p>As a digital editor at <a href="http://wttw.com/chicagotonight" target="_blank" rel="noopener noreferrer">Chicago Tonight at WTTW-Channel 11</a>, I manage a small, driven team of reporters, produce compelling stories for digital platforms, edit and program a news website and&mdash;as many in my field do at all hours of the day and night&mdash;obsess over metrics.</p>

        <p>Here, you’ll find class projects and homework from the 24-week full-stack web development program at Northwestern. I'll add new projects as I build them.</p>
        <Navbar />
      </div>
    );
  }
}

export default Contact;

