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
import './style.css';
import './styleM.css';

export default class UserInfo extends React.PureComponent {
  render() {
    return (
      <div className="container background">
        <Helmet title="UserInfo" meta={[ { name: 'description', content: 'Description of UserInfo' }]}/>

        <header>
          <Navbar/>
        </header>

        <main>
          <UserInfoRisk/>
        </main>

        <footer className="footer">
            <span>CONTRIBUTION</span>
            <span>RISK TOLERANCE</span>
            <span>PRODUCTS</span>
        </footer>

      </div>
    );
  }
}

UserInfo.contextTypes = {
  router: React.PropTypes.object
};
