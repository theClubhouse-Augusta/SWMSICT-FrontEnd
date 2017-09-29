/*
 *
 * Welcome
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Welcome extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Welcome" meta={[ { name: 'description', content: 'Description of Welcome' }]}/>
        <header>
          <Navbar/>
        </header>
        <div><h1>Welcome we&#8217;re excited to help you get started with your future investments</h1></div>
        <p>New to investing?</p>
        <input type="submit" value="Learn More"/>
        <p>First time visiting the site?</p>
        <input type="submit" value="Start New"/>
        <p>Already have an account?</p>
        <input type="submit" value="Log In"/>
      </div>
    );
  }
}

Welcome.contextTypes = {
  router: React.PropTypes.object
};
