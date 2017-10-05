/**
*
* UserInfoProducts
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class UserInfoProducts extends React.PureComponent {
  render() {
    return (
      <div className="ProductsContainer">
        <div className="userInfoProducts">
          <h1>
            <div>Which investment products</div>
            <div>interest you?</div>
          </h1>
          <div className="Checkbox">
          <span><input type="checkbox" name="isStock" value="stocks"/>Stocks
          <input type="checkbox" name="isETF" value="ETF"/>ETF
          </span><br/>
          <span><input type="checkbox" name="isBond" value="bonds"/>Bonds
          <input type="checkbox" name="isRetirement" value="retirement"/>Retirement
          </span><br/>
          <span><input type="checkbox" name="isMutualFund" value="mutualFunds"/>Mutual Funds
          <input type="checkbox" name="isIndexFund" value="indexFund"/>Index Funds
          </span><br/>
          <input type="button" value="Continue"/>
          </div>
        </div>
      </div>
    );
  }
}

UserInfoProducts.contextTypes = {
  router: React.PropTypes.object
};
