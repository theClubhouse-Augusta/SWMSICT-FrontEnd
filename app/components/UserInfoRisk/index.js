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
            <div>risk tolerance?</div>
          </h1>

          <div className="riskSlider">
              <input type="range" min="1" max="100" value="50" class="slider" id="myRange" onChange={this.props.handleRisk}/>
              </div>
          <input type="submit" value="Continue" style={{width:"320px"}}/>
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
