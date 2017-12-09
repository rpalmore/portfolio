import React, { Component } from 'react';
import helpers from '../utils/helpers';
import './Contact.css';
import Subnav from '../components/Subnav.js';

const initialState = {
  name: "",
  email: "",
  message: "" 
};

const thankYou = {
  message: "Thank you for your message!"
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
    this.setState(thankYou);
   }

  render() {
    return (
    <div>
      <div className='sectionContainer'>
        <div className='sectionContainerInner2'>
          <div className='sectionImage'></div>

          <Subnav section='contact' />

          <div className='formBackgroundLayer'></div>
          <div className='formContainer'>

            <form onSubmit={this.handleSubmit}>
              <div className='formFieldName'>
                <input id="name" type="name" value={this.state.name} onChange={this.handleChange} placeholder="Your name" className="validate" required />
              </div>
              <div className='formFieldEmail'>
                <input id="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email" className="validate" required />
              </div>
              <div className='formFieldMessage'>
                <textarea id="message" type="message" value={this.state.message} onChange={this.handleChange} placeholder="Your message" className="validate" required />
              </div>
              <div className='submitButton'>
                <button type="submit">Submit</button>
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

