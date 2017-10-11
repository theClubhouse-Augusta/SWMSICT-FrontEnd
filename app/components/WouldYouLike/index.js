/**
*
* WouldYouLike
*
*/

import React from 'react';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class WouldYouLike extends React.PureComponent {
  render() {
    return (
      <div className="wouldYouLikeBox">
        <div className="label">
          <p><strong>Create Account?</strong>
            <div className="closeX">
              <span>
                <FaClose className="x"/>
              </span>
            </div>
          </p>
        </div>
        <br/>
        <div className="wouldYouLikeContent">
          <p>Not sure you're ready to invest yet? Just browsing potential options? Create an account with SWMS and we will store your investment preferences and search results for future use!</p>
          <br/>
          <p>Would you like to create an account now?</p>
          <div className="buttonBox">
            <div>
              <input type="button" className="button" value="Yes Please!"></input>
            </div>
            <div>
              <input type="button" className="button" value="No Thanks"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WouldYouLike.contextTypes = {
  router: React.PropTypes.object
};
