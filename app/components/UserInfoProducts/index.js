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
  constructor () {
    super();

    this.state = {
      showStockCheck: false,
      showBondCheck: false
    }
  }

  renderStockCheck = () => {
    if(this.state.showStockCheck === true) {
      return(
        <FaCheck className="stockCheck"/>
      )
    }
  }
  renderBondCheck = () => {
    if(this.state.showBondCheck === true) {
      return(
        <FaCheck className="bondCheck"/>
      )
    }
  }

  handleStockCheck = () => {
    this.setState({
      showStockCheck:!this.state.showStockCheck
    })
    this.props.handleStocks();
  }
  handleBondCheck = () => {
    this.setState({
      showBondCheck:!this.state.showBondCheck
    })
    this.props.handleBonds();
  }

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
                  <div ref="checkBox" className="checkBox" onClick={this.handleStockCheck}>
                  {this.renderStockCheck()}
                  </div>
                  <div className="option">
                    Stocks
                  </div>
                </span>
              </div>

              <div className="bondBox">
                <span>
                  <div className="checkBox" onClick={this.handleBondCheck}>
                    {this.renderBondCheck()}
                  </div>
                  <div className="option">
                    Bonds
                  </div>
                </span>
              </div>

              <div className="mutualFundsBox">
                <span>
                  <div className="checkBox" onClick={this.props.handleMutualFunds}>
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
                  <div className="checkBox" onClick={this.props.handleExTradeFunds}>
                    <FaCheck/>
                  </div>
                  <div className="option">
                    ETF
                  </div>
                </span>
              </div>

              <div className="retirementBox">
                <span>
                  <div className="checkBox" onClick={this.props.handleRetirement}>
                    <FaCheck/>
                  </div>
                  <div className="option">
                    Retirement
                  </div>
                </span>
              </div>

              <div className="indexFundsBox">
                <span>
                  <div className="checkBox" onClick={this.props.handleIndexFunds}>
                    <FaCheck className="indexFundsCheck"/>{this.props.displayRiskLevel}
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
