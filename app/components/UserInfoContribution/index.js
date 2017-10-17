/**
*
* UserInfoContribution
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class UserInfoContribution extends React.PureComponent {
  render() {
    return (
      <div className="contributionContainer">
        <div className="userInfoContribution">
          <h1>
            <div>How much are you</div>
            <div>interested in investing?</div>
          </h1>
          <span><span className="dollar">$</span><input id="dollar" type="number" min="00.00" max="9999999" step="50" placeholder=""/></span>
          <input type="button" value="Continue" onClick={this.props.handleContinue1}/>
        </div>
      </div>
    );
  }
}

UserInfoContribution.contextTypes = {
  router: React.PropTypes.object
};
