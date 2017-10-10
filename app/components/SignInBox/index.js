/**
*
* SignInBox
*
*/

import React from 'react';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class SignInBox extends React.PureComponent {
  render() {
    return (
      <div className="signInBox">
        <div className="label">
          <p><strong>Log In</strong>
            <div className="closeX">
              <span>
                <FaClose className="x"/>
              </span>
            </div>
          </p>
        </div>
        <br/>
        <div className="content">
          Email: <input type="text" className="input" name="email"></input><br/>
          Password: <input type="password" className="input" name="password"></input>
          <br/>
          <div>
            <input type="button" value="Log In" className="logInButton"></input>
          </div>
        </div>
      </div>
    );
  }
}

SignInBox.contextTypes = {
  router: React.PropTypes.object
};
