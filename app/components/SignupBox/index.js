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
          <div className="label">
            <p><strong>Create Account</strong>
              <div className="closeX">
                <span>
                  <FaClose className="x"/>
                </span>
              </div>
            </p>
          </div>
          <br/>
          <div className="signUpBoxContent">
            <span className="line">
              Name*: <input className="firstNameInput" type="text" name="firstName" placeholder="(First)"></input>&nbsp;&nbsp;&nbsp;
            </span>
            <span className="line">
              <input className="lastNameInput" type="text" name="lastName" placeholder="(Last)"></input>
            </span>

            <span className="line">
              Email*: <input className="emailInput" type="text" name="email" placeholder="name@email.com"></input>
            </span>

            <span className="line">
              Phone Number: <input className="phoneNumberInput" type="text" name="phoneNumber" placeholder="(xxx)xxx-xxxx"></input>
            </span>

            <span className="line">
              Address: <br/>
            </span>
            <span className="line">
              &#09;Street: <input className="streetInput" type="text" name="street" placeholder="123 Jackson Ave"></input>
            </span>

            <span className="line">
              &#09;City: <input className="cityInput" type="text" name="city" placeholder="Chigaco"></input><br/>
            </span>

            <span className="line">
              &#09;State: <input className="stateInput" type="text" name="state" placeholder="Illinois"></input><br/>
            </span>

            <span className="line">
              &#09;Zip Code: <input className="zipInput" type="text" name="zip" placeholder="60626"></input>
            </span>

            <span className="line">
              Level of Investment Interest:&nbsp;
              Low<input className="interestInput"className="range" type="range" name="interestLevel"></input>High
            </span>

            <span className="line">
              Would you like to be contacted?:&nbsp;&nbsp;&nbsp;&nbsp;
              Yes <input className="contactYes" type="radio" name="contacted"></input>
              No <input className="contactNo" type="radio" name="contacted"></input>
            </span>
          </div>
        </div>
      );
  }
}

SignupBox.contextTypes = {
  router: React.PropTypes.object
};
