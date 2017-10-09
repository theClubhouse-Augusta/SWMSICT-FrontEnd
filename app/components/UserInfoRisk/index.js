/**
*
* UserInfoRisk
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class UserInfoRisk extends React.PureComponent {
  render() {
    return (
      <div className="riskContainer">
        <div className="userInfoRisk">
          <h1>
            <div>What is your investment</div>
            <div className ="emphasizedRisk">risk tolerance?</div>
          </h1>
          <div className="riskChoice">
              <label className="riskRadio">
                <input type="radio" name="risk" value="3" hidden/>Conservative</label>
              <label className="riskRadio">
                <input type="radio" name="risk" value="2" hidden/>Moderate</label>
              <label className="riskRadio">
                <input type="radio" name="risk" value="1" hidden/>Aggressive</label>
          </div>
          <input type="button" value="Continue"/>
        </div>
      </div>
    );
  }
}

UserInfoRisk.contextTypes = {
  router: React.PropTypes.object
};
