/**
*
* SignupBox
*
*/

import React from 'react';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class SignupBox extends React.PureComponent {
  render() {

    return (
      <div className="signUpBox">
        <div className="signUpHeader">
          <p> &nbsp;
            <div className="closeX">
                <FaClose className="x"/>
            </div>
          </p>
        </div>
        <br/>
        <div className="signUpContent">
          <img src={require("../../photos/signup-name.svg")}/>
          <div className="firstLast">
            <input className="firstNameInput" type="text" name="firstName" placeholder="First"></input>
            <input className="lastNameInput" type="text" name="lastName" placeholder="Last"></input>
          </div>
          <img src={require("../../photos/signup-email.svg")}/>
          <input type="text" className="input" name="email" placeholder="Email"></input>
          <img src={require("../../photos/signup-phone.svg")}/>
          <input type="text" className="input" name="phone" placeholder="Phone"></input>
          <img src={require("../../photos/signup-password.svg")}/>
          <input type="password" className="input" name="password" placeholder="Password"></input>
          <div>
            <input type="button" value="Create Account" className="signUpButton"></input>
          </div>
        </div>
      </div>
    );
  }
}

SignupBox.contextTypes = {
  router: React.PropTypes.object
};
