/**
*
* UserInfoProducts
*
*/

import React from 'react';
import FaCheck from 'react-icons/lib/fa/check';

import './style.css';
import './styleM.css';

export default class UserInfoProducts extends React.PureComponent {
  render() {
    return (
      <div className="productsContainer">
        <div className="userInfoProducts">
          <h1>
            <div>Which investment products</div>
            <div>interest you?</div>
          </h1>
          <div className="checkboxContainer">
            <div className="columnOne">
              <div className="stockBox">
                <span>
                  <div className="checkBox">
                    <FaCheck/>
                  </div>
                  <div className="option">
                    Stocks
                  </div>
                </span>
              </div>

              <div className="bondBox">
                <span>
                  <div className="checkBox">
                    <FaCheck/>
                  </div>
                  <div className="option">
                    Bonds
                  </div>
                </span>
              </div>

              <div className="mutualFundsBox">
                <span>
                  <div className="checkBox">
                    <FaCheck/>
                  </div>
                  <div className="option">
                    Mutual Funds
                  </div>
                </span>
              </div>
          </div>

            <div className="columnTwo">
              <div className="etfBox">
                <span>
                  <div className="checkBox">
                    <FaCheck/>
                  </div>
                  <div className="option">
                    ETF
                  </div>
                </span>
              </div>

              <div className="retirementBox">
                <span>
                  <div className="checkBox">
                    <FaCheck/>
                  </div>
                  <div className="option">
                    Retirement
                  </div>
                </span>
              </div>

              <div className="indexFundsBox">
                <span>
                  <div className="checkBox">
                    <FaCheck/>
                  </div>
                  <div className="option">
                    Index Funds
                  </div>
                </span>
              </div>
            </div>
          </div>
            <input type="button" value="Continue"/>
        </div>
      </div>
    );
  }
}

UserInfoProducts.contextTypes = {
  router: React.PropTypes.object
};
