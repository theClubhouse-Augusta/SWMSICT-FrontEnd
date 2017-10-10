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
      riskLevel:0
    }
  }

  handleRisk = (event) => {

  }
  render() {
    return (
      <div className="container background">
        <Helmet title="UserInfo" meta={[ { name: 'description', content: 'Description of UserInfo' }]}/>

        <header>
          <Navbar/>
        </header>

        <main>
          <UserInfoRisk handleRisk={this.handleRisk}/>
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
