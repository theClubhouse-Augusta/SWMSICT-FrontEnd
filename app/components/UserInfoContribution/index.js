/**
*
* UserInfoContribution
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class UserInfoContribution extends React.PureComponent {
  constructor(){
    super();
  }
  componentWillMount(){
    sessionStorage.setItem('isStock', 0);
    sessionStorage.setItem('isBond', 0);
    sessionStorage.setItem('isMutualFund', 0);
    sessionStorage.setItem('isETF', 0);
    sessionStorage.setItem('isIndexFund', 0);
    sessionStorage.setItem('isRetirement', 0);
  }
  handleEnter = (event) => {
      if(event.keyCode === 13)
      {
        this.props.handleContinue1();
      }
    };

    render() {
      return (
        <div className="contributionContainer">
          <div className="userInfoContribution">
            <h1>
              <div>How much are you</div>
              <div>interested in investing?</div>
            </h1>
            <span><span className="dollar">$</span><input id="dollar" type="number" min="00.00" max="9999999" step="50" placeholder="" onKeyDown={this.handleEnter}/></span>
            <input type="button" value="Continue" onClick={this.props.handleContinue1}/>
          </div>
        </div>
      );
    }
  }

UserInfoContribution.contextTypes = {
  router: React.PropTypes.object
};
