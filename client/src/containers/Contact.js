import React, { Component } from 'react';
import helpers from '../utils/helpers';

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
                <div>
                  <div>
                    <div>
                    <input id="name" type="name" value={this.state.name} onChange={this.handleChange} placeholder="Your name" className="validate" />
                    <input id="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email" className="validate" />
                    <input id="message" type="message" value={this.state.message} onChange={this.handleChange} placeholder="Your message" className="validate" />
                    </div>
                  </div>
                </div>
                <center>
                  <button type="submit">Submit</button>
                </center>
              </form>

      </div>
    );
  }
}

export default Contact;

