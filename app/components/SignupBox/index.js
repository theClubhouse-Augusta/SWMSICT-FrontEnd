/**
*
* SignupBox
*
*/

import React from 'react';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class SignupBox extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: ""
    }
  };
  getSessionData = () => {
    let data = {};
    data.userID = 1;
    data.minInvestment = sessionStorage.getItem('minInvestment');
    data.riskLevel = sessionStorage.getItem('riskLevel');
    data.isStock = sessionStorage.getItem('isStock');
    data.isBond = sessionStorage.getItem('isBond');
    data.isMutualFund = sessionStorage.getItem('isMutualFund');
    data.isETF = sessionStorage.getItem('isETF');
    data.isIndexFund = sessionStorage.getItem('isIndexFund');
    data.isRetirement = sessionStorage.getItem('isRetirement');

    return data;
  }
  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  };
  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  };
  handlePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value
    })
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  };
  signUp = () => {
    let _this = this;
    let data = new FormData();
    data.append("firstName", this.state.firstName);
    data.append("lastName", this.state.lastName);
    data.append("email", this.state.email);
    data.append("phoneNum", this.state.phoneNumber);
    data.append("password", this.state.password);

    fetch("http://localhost:8000/api/signUp", {
      method:"POST",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.error === 'Missing field')
      {
        alert("missing field");
      }
      else if(json.error === 'Username Unavailable')
      {
        alert("email unavailable");
      }
      else if(json.success)
      {
        alert("successfully signed up");
        _this.signIn();
      }
    })
  }
  signIn=()=> {
    let _this = this;
    let data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);

    fetch("http://localhost:8000/api/signIn", {
      method:"POST",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.error === 'Missing field')
      {
        alert("missing field");
      }
      else if(json.token)
      {
        sessionStorage.setItem('token', json.token);
        _this.getUser(json.token);
      }
    })
  };
  getUser = (token) => {
    let _this = this;
    fetch("http://localhost:8000/api/getUser", {
      method:"GET",
      headers:{'Authorization':'Bearer ' + token}
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      sessionStorage.setItem('firstName', JSON.stringify(json.firstName));
      sessionStorage.setItem('userID', JSON.stringify(json.id));
      alert("token created, information stored to session");
    })
  };

  render() {
    if(this.props.openSignUp === true)
    {
      return (
        <div className="signUpBox">
          <div className="signUpHeader">
            <div className="closeX">
              <p>
                  <FaClose className="x" onClick={this.props.toggleSignUp}/>
              </p>
            </div>
          </div>
          <br/>
          <div className="signUpContent">
            <img src={require("../../photos/signup-name.svg")}/>
            <input className="signUpInput" type="text" name="firstName" placeholder="First" onChange={this.handleFirstName}></input>
            <input className="signUpInput" type="text" name="lastName" placeholder="Last" onChange={this.handleLastName}></input>
            <img src={require("../../photos/signup-email.svg")}/>
            <input type="text" className="signUpInput" name="email" placeholder="Email" onChange={this.handleEmail}></input>
            <img src={require("../../photos/signup-phone.svg")}/>
            <input type="text" className="signUpInput" name="phone" placeholder="Phone"  onChange={this.handlePhoneNumber}></input>
            <img src={require("../../photos/signup-password.svg")}/>
            <input type="password" className="signUpInput" name="password" placeholder="Password" onChange={this.handlePassword}></input>
            <div>
              <input type="button" value="Create Account" className="signUpButton" onClick={this.signUp}></input>
            </div>
          </div>
        </div>
      );
    }
    else {
     return(
       <div></div>
     )
    }
  }
}

SignupBox.contextTypes = {
  router: React.PropTypes.object
};
