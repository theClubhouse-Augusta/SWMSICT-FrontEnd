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
            <p>Create Account
              <div className="closeX">
                <span className="x">
                  <FaClose/>
                </span>
              </div>
            </p>
          </div>
          <br/>
          <div className="content">
            <span className="firstName">
              Name*: <input type="text" name="firstName" placeholder="(First)"></input>
            </span>
            <span className="lastName">
              <input type="text" name="lastName" placeholder="(Last)"></input>
            </span>
          </div>
        </div>
      );
  }
}

SignupBox.contextTypes = {
  router: React.PropTypes.object
};
