/*
 *
 * Welcome
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import SignupBox from 'components/SignupBox';
import SignInBox from 'components/SignInBox';

import './style.css';
import './styleM.css';

export default class Results extends React.PureComponent {

  render() {
    return (

      <div className="container background">


      <div className="container welcomeBackground">

        <Helmet title="Welcome" meta={[ { name: 'description', content: 'Description of Welcome' }]}/>
        <header>
          <Navbar/>
        </header>
        <main>
          <SignInBox/>
          <SignupBox/>
        <div className="welcomeTitle">
        <h1>
          <div>Your future</div>
          <div>begins today.</div>
        </h1>

        </div>
          <div className='welcomeScreen'>

            <div className="buttons">
              <input type="submit" value="Start Now"/>
              <input type="submit" value="Learn More"/>
            </div>
            <input type="submit" value="Log In" style={{width:"320px"}}/>
          </div>
        </main>
      </div>

    );
  }
}

Results.contextTypes = {
  router: React.PropTypes.object
};
