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
    sessionStorage.setItem('minInvestment', document.getElementById('dollar').value);
  }
  handleRiskLevel = (event) => {
    this.setState ({
      riskLevel:event.target.value
    })
    sessionStorage.setItem('riskLevel', event.target.value);
  }
  handleStocks = (event) => {
    if (this.state.isStock == 0) {
      this.setState ({
        isStock: 1
      })
      sessionStorage.setItem('isStock', 1);
    }
    else {
      this.setState({
        isStock: 0
      })
      sessionStorage.setItem('isStock', 0);
    }
  }

  handleBonds = (event) => {
    if (this.state.isBond == 0) {
      this.setState ({
        isBond: 1
      })
      sessionStorage.setItem('isBond', 1);
    }
    else {
      this.setState({
        isBond: 0
      })
      sessionStorage.setItem('isBond', 0);
    }
  }

  handleMutualFunds = (event) => {
    if (this.state.isMutualFund == 0) {
      this.setState ({
        isMutualFund: 1
      })
      sessionStorage.setItem('isMutualFund', 1);
    }
    else {
      this.setState({
        isMutualFund: 0
      })
      sessionStorage.setItem('isMutualFund', 0);
    }
  }
  handleExTradeFunds = (event) => {
    if (this.state.isETF == 0) {
      this.setState ({
        isETF: 1
      })
      sessionStorage.setItem('isETF', 1);
    }
    else {
      this.setState({
        isETF: 0
      })
      sessionStorage.setItem('isETF', 0);
    }
  }

  handleIndexFunds = (event) => {
    if (this.state.isIndexFund == 0) {
      this.setState ({
        isIndexFund: 1
      })
      sessionStorage.setItem('isIndexFund', 1);
    }
    else {
      this.setState({
        isIndexFund: 0
      })
      sessionStorage.setItem('isIndexFund', 0);
    }
  }

  handleRetirement = (event) => {
    if (this.state.isRetirement == 0) {
      this.setState ({
        isRetirement: 1
      })
      sessionStorage.setItem('isRetirement', 1);
    }
    else {
      this.setState({
        isRetirement: 0
      })
      sessionStorage.setItem('isRetirement', 0);
    }
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
  sendFormData = () => {
    let data = new FormData();
    alert(sessionStorage.getItem('userID') + ' user id from sessions');

    data.append('userID', sessionStorage.getItem('userID'));
    data.append('riskLevel', sessionStorage.getItem('riskLevel'));
    data.append('minInvestment', sessionStorage.getItem('minInvestment'));
    data.append('isStock', sessionStorage.getItem('isStock'));
    data.append('isBond', sessionStorage.getItem('isBond'));
    data.append('isMutualFund', sessionStorage.getItem('isMutualFund'));
    data.append('isETF', sessionStorage.getItem('isETF'));
    data.append('isIndexFund', sessionStorage.getItem('isIndexFund'));
    data.append('isRetirement', sessionStorage.getItem('isRetirement'));

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


        <main>


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
