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
      showUserInfoContribution: true,
      showUserInfoRisk: false,
      showUserInfoProducts: false
    }
  }
  handleRisk = (event) => {

  }

  handleContinue1 = () => {
    this.setState({
      showUserInfoContribution: false,
      showUserInfoRisk: true
    })
  }

  handleContinue2 = () => {
    this.setState({
      showUserInfoRisk: false,
      showUserInfoProducts: true
    })
  }
  handleContinue3 = () => {
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
          <UserInfoRisk handleContinue2={this.handleContinue2}/>
        </div>
      )
    }
  }
  renderUserInfoProducts = () => {
    if(this.state.showUserInfoProducts === true)
    {
      return (
        <div>
          <UserInfoProducts handleContinue3={this.handleContinue3}/>
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
            <li class="active">CONTRIBUTION</li>
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
