/*
*
* UserInfo
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class UserInfo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userID: "",
      riskLevel: "0",
      minInvestment: "50",
      isStock: "",
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
      displayOptions: []
    }
  }

  handleRisk = (event) => {
    this.setState ({
      riskLevel:event.target.value
    })
  }
  handleStocks = (event) => {
    this.setState ({
      isStock:event.target.value
    })
  }
  handleBonds = (event) => {
    this.setState ({
      isBond:event.target.value
    })
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
  }
  handleRetirement = (event) => {
    this.setState ({
      isRetirement:event.target.value
    })
  }

  getFormData = () => {
    let data = new FormData();

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
      this.setState({
        getProducts:json.getProducts,
        message:json.message,
        messageNum:json.messageNum,
        searchCriteria:json.searchCriteria
      })
    }.bind(this))

    document.getElementById('riskLevel1').checked = false;
    document.getElementById('riskLevel2').checked = false;
    document.getElementById('riskLevel3').checked = false;

    document.getElementById('isStock').checked = false;
    document.getElementById('isBond').checked = false;
    document.getElementById('isMutualFund').checked = false;
    document.getElementById('isETF').checked = false;
    document.getElementById('isIndexFund').checked = false;
    document.getElementById('isRetirement').checked = false;

  };

  getResults = () => {
    if(this.state.messageNum == 1){

      return (
        this.state.getProducts.map((product,index)=>(
            <div>
            <div><h3>{product.name}</h3></div>
            <div><h4>{product.summary}</h4></div>
            <div><br/><br/></div>
            </div>
        )));
    }
    else if (this.state.messageNum == 0) {
        if (this.state.searchCriteria.length > 0) {

          if (this.state.searchCriteria[0] == 1) {
            this.state.displayRiskLevel = 'Aggressive';
          }
          else if (this.state.searchCriteria[0] == 2) {
            this.state.displayRiskLevel = 'Moderate';
          }
          else if (this.state.searchCriteria[0] == 3) {
            this.state.displayRiskLevel = 'Conservative';
          }

          for (let x = 2; x < this.state.searchCriteria.length; x++) {
            let temp = this.state.searchCriteria[x] + ', ';
            this.state.displayOptions.push(temp);
          }




            return this.state.displayOptions;





        }
        else {
          return "";
        }
    }

    this.setState({
      messageNum:"",
      riskLevel: "0",
      isStock: "",
      isBond: "",
      isMutualFund: "",
      isETF: "",
      isIndexFund: "",
      isRetirement: ""
    })
    .bind(this)
  }


  render() {
    return (
      <div className="container">
        <Helmet title="UserInfo" meta={[ { name: 'description', content: 'Description of UserInfo' }]}/>
        <header>
          <Navbar/>
        </header>
            <div className="directions">
              <span>Please fill in the form below</span>
              </div><br/>



            What risk level are you interested in?:<br/>

            <input type="radio" id="riskLevel1" name="riskLevel" value="3" onChange={this.handleRisk}/> Conservative<br/>
            <input type="radio" id="riskLevel2"  name="riskLevel" value="2" onChange={this.handleRisk}/> Moderate<br/>
            <input type="radio" id="riskLevel3"  name="riskLevel" value="1" onChange={this.handleRisk}/> Aggressive<br/>

            <br/>

            You may select from the list below to narrow search options if desired:<br/>
            <input type="checkbox" id="isStock" name="isStock" value="1" onChange={this.handleStocks}/> Stocks<br/>
            <input type="checkbox" id="isBond" name="isBond" value="1" onChange={this.handleBonds}/> Bonds<br/>
            <input type="checkbox" id="isMutualFund" name="isMutualFund" value="1" onChange={this.handleMutualFunds}/> Mutual Funds<br/>
            <input type="checkbox" id="isETF" name="isETF" value="1" onChange={this.handleExTradeFunds}/> ETFs<br/>
            <input type="checkbox" id="isIndexFund" name="isIndexFund" value="1" onChange={this.handleIndexFunds}/> Index Funds<br/>
            <input type="checkbox" id="isRetirement" name="isRetirement" value="1" onChange={this.handleRetirement}/> Retirement<br/>

            <br/>

            <input type="button" value="Submit" onClick={this.getFormData}/>

            <div>{this.state.message}<br/><br/></div>
            <div>{this.getResults()}</div>



      </div>
    );
  }
}

UserInfo.contextTypes = {
  router: React.PropTypes.object
};
