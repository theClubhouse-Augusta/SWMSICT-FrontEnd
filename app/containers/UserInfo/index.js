/*
*
* UserInfo
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';

import UserInfoContribution from 'components/UserInfoContribution';
import UserInfoRisk from 'components/UserInfoRisk';
import UserInfoProducts from 'components/UserInfoProducts';

import './style.css';
import './styleM.css';

export default class UserInfo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userID: "",
      riskLevel: "",
      minInvestment: 0,
      isStock: 0,
      isBond: 0,
      isMutualFund: 0,
      isETF: 0,
      isIndexFund: 0,
      isRetirement: 0,
      getProducts: [],
      success: "",
      messageNum: "",
      options: "",
      searchCriteria:[],
      displayRiskLevel: "",
      displayMinInvestment: "",
      displayOptions: [],
      riskLevel: "",
      showUserInfoContribution: true,
      showUserInfoRisk: false,
      showUserInfoProducts: false,
      searchStuff: []
    }
  }


  handleMinInvestment = (event) => {
    this.setState ({
      minInvestment:document.getElementById('dollar').value
    })
  }

  handleRiskLevel = (event) => {
    this.setState ({
      riskLevel:event.target.value
    })
  }
  handleStocks = (event) => {
    if (this.state.isStock == 0) {
      this.setState ({
        isStock: 1
      })
    }
    else {
      this.setState({
        isStock: 0
      })
    }
  }

  handleBonds = (event) => {
    if (this.state.isBond == 0) {
      this.setState ({
        isBond: 1
      })
    }
    else {
      this.setState({
        isBond: 0
      })
    }
  }

  handleMutualFunds = (event) => {
    if (this.state.isMutualFund == 0) {
      this.setState ({
        isMutualFund: 1
      })
    }
    else {
      this.setState({
        isMutualFund: 0
      })
    }
  }

  handleExTradeFunds = (event) => {
    if (this.state.isETF == 0) {
      this.setState ({
        isETF: 1
      })
    }
    else {
      this.setState({
        isETF: 0
      })
    }
  }

  handleIndexFunds = (event) => {
    if (this.state.isIndexFund == 0) {
      this.setState ({
        isIndexFund: 1
      })
    }
    else {
      this.setState({
        isIndexFund: 0
      })
    }
  }

  handleRetirement = (event) => {
    if (this.state.isRetirement == 0) {
      this.setState ({
        isRetirement: 1
      })
    }
    else {
      this.setState({
        isRetirement: 0
      })
    }
  }

  sendFormData = () => {
    let data = new FormData();

    data.append('userID', 1);
    data.append('riskLevel', this.state.riskLevel);
    data.append('minInvestment', this.state.minInvestment);
    data.append('isStock', this.state.isStock);
    data.append('isBond', this.state.isBond);
    data.append('isMutualFund', this.state.isMutualFund);
    data.append('isETF', this.state.isETF);
    data.append('isIndexFund', this.state.isIndexFund);
    data.append('isRetirement', this.state.isRetirement);

    fetch ('http://localhost:8000/api/saveSearchData',{
      method: 'POST',
      body: data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json.success);
    })
  }




  handleContinue1 = () => {
    this.setState({
      showUserInfoContribution: false,
      showUserInfoRisk: true
    })
    this.handleMinInvestment();
  }

  handleContinue2 = () => {
    this.setState({
      showUserInfoRisk: false,
      showUserInfoProducts: true
    })
  }
  handleContinue3 = () => {
    this.sendFormData();
    this.context.router.push("/Results");
  }

  renderUserInfoContribution = () => {
    if(this.state.showUserInfoContribution === true)
    {
      return (
        <div>
          <UserInfoContribution handleContinue1={this.handleContinue1}/>
        </div>
      )
    }
  }
  renderUserInfoRisk = () => {
    if(this.state.showUserInfoRisk === true)
    {
      return (
        <div>
          <UserInfoRisk handleContinue2={this.handleContinue2} handleRiskLevel={this.handleRiskLevel}/>
        </div>
      )
    }
  }
  renderUserInfoProducts = () => {
    if(this.state.showUserInfoProducts === true)
    {
      return (
        <div>
          <UserInfoProducts handleContinue3={this.handleContinue3} handleStocks={this.handleStocks} handleBonds={this.handleBonds} handleMutualFunds={this.handleMutualFunds} handleExTradeFunds={this.handleExTradeFunds} handleIndexFunds={this.handleIndexFunds} handleRetirement={this.handleRetirement}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container userInfoBackground">
        <Helmet title="UserInfo" meta={[ { name: 'description', content: 'Description of UserInfo' }]}/>
        <header>
          <Navbar/>
        </header>


        <main>here: {this.state.minInvestment} / {this.state.riskLevel} <br/>
        Stocks:{this.state.isStock}<br/>
        Bonds:{this.state.isBond}<br/>
        MF:{this.state.isMutualFund}<br/>
        ETF:{this.state.isETF}<br/>
        Retirement:{this.state.isRetirement}<br/>
        Index Funds:{this.state.isIndexFund}<br/>


          {this.renderUserInfoContribution()}
          {this.renderUserInfoRisk()}
          {this.renderUserInfoProducts()}

        </main>
        <footer>
          <ul className="progressBar">
            <li className="active">CONTRIBUTION</li>
            <li>RISK TOLERANCE</li>
            <li>PRODUCTS</li>
          </ul><br/>
        </footer>


      </div>
    );
  }
}

UserInfo.contextTypes = {
  router: React.PropTypes.object
};
