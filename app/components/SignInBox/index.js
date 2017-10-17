/**
*
* SignInBox
*
*/

import React from 'react';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class SignInBox extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      email: null,
      password: null
    }
  };
  handleEmail=(event)=> {
    this.setState({
      email:event.target.value
    })
  };
  handlePassword=(event)=> {
    this.setState({
      password:event.target.value
    })
  };
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
    return (
      <div className="signInBox">
        <div className="signInHeader">
          <p> &nbsp;
            <div className="closeX">
                <FaClose className="x"/>
            </div>
          </p>
        </div>
        <br/>
        <div className="signInContent">
          <img src={require("../../photos/login-username.svg")}/>
          <input type="text" className="input" name="email" placeholder="Username" onChange={this.handleEmail}></input><br/>
          <img src={require("../../photos/login-password.svg")}/>
          <input type="password" className="input" name="password" placeholder="Password" onChange={this.handlePassword}></input>
          <br/>
          <div>
            <input type="button" value="Log In" className="logInButton" onClick={this.signIn}></input>
          </div>
        </div>
      </div>
    );
  }
}

SignInBox.contextTypes = {
  router: React.PropTypes.object
};
