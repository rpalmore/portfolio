import React, { Component } from 'react';
import helpers from '../utils/helpers';
import './Contact.css';
import Subnav from './Subnav.js';

const initialState = {
  name: "",
  email: "",
  message: "" 
};

class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
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
    this.setState({name: "", email: "", message: "Thank you for your message, " + this.state.name + "!"});
   }

  render() {
    return (
      <div>
        <Subnav section='contact' />
        <div className='sectionContainer'>
          <div className='sectionImage'></div>
          <div className='sectionContainerInner'>
            <div className='formBackgroundLayer'></div>
            <div className='formContainer'>

              <form onSubmit={this.handleSubmit}>
                <div className='formField'>
                  <input id="name" type="name" value={this.state.name} onChange={this.handleChange} placeholder="Your name" className="validate" required />
                  <input id="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email" className="validate" required />
                </div>
                <div className='formText'>
                  <textarea id="message" type="message" value={this.state.message} onChange={this.handleChange} placeholder="Message" className="validate" required />
                </div>
                <div className='submitButton'>
                  <button className='close' type="submit">Send</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
