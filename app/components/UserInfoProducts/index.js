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



  renderStocksCheck = () => {
    if(this.state.showStocksCheck === true) {
      return(
        <FaCheck className="stocksCheck"/>
      )
    }
  }
  renderBondsCheck = () => {
    if(this.state.showBondsCheck === true) {
      return(
        <FaCheck className="bondsCheck"/>
      )
    }
  }
  renderMutualFundsCheck = () => {
    if(this.state.showMutualFundsCheck === true) {
      return(
        <FaCheck className="mutualFundsCheck"/>
      )
    }
  }
  renderExTradeFundsCheck = () => {
    if(this.state.showExTradeFundsCheck === true) {
      return(
        <FaCheck className="exTradeFundsCheck"/>
      )
    }
  }
  renderRetirementCheck = () => {
    if(this.state.showRetirementCheck === true) {
      return(
        <FaCheck className="retirementCheck"/>
      )
    }
  }
  renderIndexFundsCheck = () => {
    if(this.state.showIndexFundsCheck === true) {
      return(
        <FaCheck className="indexFundsCheck"/>
      )
    }
  }


  handleStocksCheck = () => {
    this.setState({
      showStocksCheck:!this.state.showStocksCheck
    })
    this.props.handleStocks();
  }
  handleBondsCheck = () => {
    this.setState({
      showBondsCheck:!this.state.showBondsCheck
    })
    this.props.handleBonds();
  }
  handleMutualFundsCheck = () => {
    this.setState({
      showMutualFundsCheck:!this.state.showMutualFundsCheck
    })
    this.props.handleMutualFunds();
  }
  handleExTradeFundsCheck = () => {
    this.setState({
      showExTradeFundsCheck:!this.state.showExTradeFundsCheck
    })
    this.props.handleExTradeFunds();
  }
  handleRetirementCheck = () => {
    this.setState({
      showRetirementCheck:!this.state.showRetirementCheck
    })
    this.props.handleRetirement();
  }
  handleIndexFundsCheck = () => {
    this.setState({
      showIndexFundsCheck:!this.state.showIndexFundsCheck
    })
    this.props.handleIndexFunds();
  }

  render() {
    return (
      <div className="productsContainer">
        <div className="userInfoProducts">
          <h1>
            <div>Which investment products</div>
            <div>interest you?
            </div>
          </h1>
          <div className="checkboxContainer">
            <div className="columnOne">
              <div className="stockBox">
                <span>
                  <div ref="checkBox" className="checkBox" onClick={this.handleStocksCheck}>
                  {this.renderStocksCheck()}
                  </div>
                  <div className="option">
                    Stocks
                  </div>
                </span>
              </div>

              <div className="bondBox">
                <span>
                  <div className="checkBox" onClick={this.handleBondsCheck}>
                    {this.renderBondsCheck()}
                  </div>
                  <div className="option">
                    Bonds
                  </div>
                </span>
              </div>

              <div className="mutualFundsBox">
                <span>
                  <div className="checkBox" onClick={this.handleMutualFundsCheck}>
                    {this.renderMutualFundsCheck()}
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
                  <div className="checkBox" onClick={this.handleExTradeFundsCheck}>
                    {this.renderExTradeFundsCheck()}
                  </div>
                  <div className="option">
                    ETF
                  </div>
                </span>
              </div>

              <div className="retirementBox">
                <span>
                  <div className="checkBox" onClick={this.handleRetirementCheck}>
                    {this.renderRetirementCheck()}
                  </div>
                  <div className="option">
                    Retirement
                  </div>
                </span>
              </div>

              <div className="indexFundsBox">
                <span>
                  <div className="checkBox" onClick={this.handleIndexFundsCheck}>
                    {this.renderIndexFundsCheck()}
                  </div>
                  <div className="option">
                    Index Funds
                  </div>
                </span>
              </div>
            </div>
          </div>
            <input type="button" value="Continue" onClick={this.props.handleContinue3}/>
        </div>
      </div>
    );
  }
}

UserInfoProducts.contextTypes = {
  router: React.PropTypes.object
};
