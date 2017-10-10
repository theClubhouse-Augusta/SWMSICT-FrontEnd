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
      riskLevel: "0",
      minInvestment: "50",
      isStock: 0,
      isBond: "",
      isMutualFund: "",
      isETF: "",
      isIndexFund: "",
      isRetirement: "",
      getProducts: [],
      success: "",
      messageNum: "",
      options: "",
      searchCriteria:[],
      displayRiskLevel: "",
      displayMinInvestment: "",
      displayOptions: [],
      riskLevel: ""
    }
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
    this.setState ({
      isMutualFund:event.target.value
    })
  }
  handleExTradeFunds = (event) => {
    this.setState ({
      isETF:event.target.value
    })
  }
  handleIndexFunds = (event) => {
    this.setState ({
      isIndexFund:event.target.value
    })
    this.setState ({
      displayRiskLevel: "HIYA"
    })
  }
  handleRetirement = (event) => {
    this.setState ({
      isRetirement:event.target.value
    })
  }

  getFormData = () => {
    let data = new FormData();

    this.setState({
      displayOptions: []
    });

    data.append('userID', 1);
    data.append('riskLevel', this.state.riskLevel);
    data.append('minInvestment', 50);
    data.append('isStock', this.state.isStock);
    data.append('isBond', this.state.isBond);
    data.append('isMutualFund', this.state.isMutualFund);
    data.append('isETF', this.state.isETF);
    data.append('isIndexFund', this.state.isIndexFund);
    data.append('isRetirement', this.state.isRetirement);

    fetch ('http://localhost:8000/api/getProducts',{
      method: 'POST',
      body: data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json.getProducts);
      console.log(json.searchCriteria);
      this.parseResults(json.searchCriteria);
      this.setState({
        getProducts:json.getProducts,
        message:json.message,
        messageNum:json.messageNum
      })
    }.bind(this))
  }

  parseResults = (data) => {
    let displayOptions = this.state.displayOptions;
    let riskLevel = 'Aggressive';

    if (data.length > 0) {
      if (data[0] == 1) {
        riskLevel = 'Aggressive';
      }
      else if (data[0] == 2) {
        riskLevel = 'Moderate';
      }
      else if (data[0] == 3) {
        riskLevel:'Conservative';
      }
    }
    let temp = '';
    for (let x = 2; x < data.length; x++) {

        if (x < data.length - 1) {
            temp = data[x] + ', ';
        }
        else {
          temp = data[x];
        }

        displayOptions.push(temp);

        this.setState({
          displayRiskLevel:riskLevel,
          displayOptions:displayOptions,
          displayMinInvestment:data[1]
        })
    }
  }





  render() {
    return (
      <div className="container background">
        <Helmet title="UserInfo" meta={[ { name: 'description', content: 'Description of UserInfo' }]}/>
        <header>
          <Navbar/>
        </header>








        <main>here: {this.state.isStock}<br/><br/>
          <UserInfoProducts handleStocks={this.handleStocks} handleBonds={this.handleBonds} />
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
