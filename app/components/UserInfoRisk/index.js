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
          <div className="riskSlider">
              <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
              </div>
          <input type="submit" value="Continue" style={{width:"320px"}}/>
        </div>
      </div>
    );
  }
}

UserInfoRisk.contextTypes = {
  router: React.PropTypes.object
};
