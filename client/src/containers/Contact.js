import React, { Component } from 'react';
import helpers from '../utils/helpers';
import './Contact.css';

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
      </div>
    );
  }
}

export default Contact;

