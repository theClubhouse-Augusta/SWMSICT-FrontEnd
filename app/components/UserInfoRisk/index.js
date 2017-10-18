/**
*
* UserInfoRisk
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class UserInfoRisk extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      activeBox:0
    }
  }

  handleRiskClick = (event) => {
    if(event.target.value == 3)
    {
      this.setState({
        activeBox:3
      })
    }
    else if(event.target.value == 2)
    {
      this.setState({
        activeBox:2
      })
    }
    else if(event.target.value == 1)
    {
      this.setState({
        activeBox:1
      })
    }
    this.props.handleRiskLevel(event);
  }

  render() {

    let riskRadio1 = "riskRadio";
    let riskRadio2 = "riskRadio";
    let riskRadio3 = "riskRadio";

    if(this.state.activeBox === 1)
    {
      riskRadio1 = "riskRadioActive";
    }
    else if(this.state.activeBox === 2)
    {
      riskRadio2 = "riskRadioActive";
    }
    else if(this.state.activeBox === 3)
    {
      riskRadio3 = "riskRadioActive";
    }

    return (
      <div className="riskContainer">
        <div className="userInfoRisk">
          <h1>
            <div>What is your investment</div>
            <div>risk tolerance?</div>
          </h1>


          <div className="riskChoice">
              <label className={riskRadio3}>
                <input  type="radio" name="risk" value="3" onClick={this.handleRiskClick} hidden/>Conservative</label>
              <label className={riskRadio2}>
                <input type="radio" name="risk" value="2" onClick={this.handleRiskClick} hidden/>Moderate</label>
              <label className={riskRadio1}>
                <input type="radio" name="risk" value="1" onClick={this.handleRiskClick} hidden/>Aggressive</label>
          </div>
          <input type="button" value="Continue" onClick={this.props.handleContinue2}/>
        </div>
      </div>
    );
  }
}

UserInfoRisk.contextTypes = {
  router: React.PropTypes.object
};
