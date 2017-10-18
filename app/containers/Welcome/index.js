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
import WouldYouLike from 'components/WouldYouLike'
import './style.css';
import './styleM.css';

export default class Welcome extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      showSignUp: false,
      showSignIn: false
    }
  }
  componentWillMount() {

    if(!sessionStorage.getItem('userID'))
    {
      sessionStorage.setItem('userID', 0);
    }

    sessionStorage.setItem('isStock', 0);
    sessionStorage.setItem('isBond', 0);
    sessionStorage.setItem('isMutualFund', 0);
    sessionStorage.setItem('isETF', 0);
    sessionStorage.setItem('isIndexFund', 0);
    sessionStorage.setItem('isRetirement', 0);
  }
  goToSearch = () => {
    this.context.router.push("/UserInfo");
  }
  goToEducation = () => {
    this.context.router.push("/Education");
  }
  toggleSignUp = () => {
    this.setState({
      showSignUp: !this.state.showSignUp
    })
  }
  toggleSignIn = () => {
    this.setState({
      showSignIn: !this.state.showSignIn
    })
  }

  render() {
    return (

      <div className="container welcomeBackground">

        <Helmet title="Welcome" meta={[ { name: 'description', content: 'Description of Welcome' }]}/>
        <header>
          <Navbar/>
        </header>
        <SignInBox toggleSignIn={this.toggleSignIn} openSignIn={this.state.showSignIn}/>
        <main>
        <div className="welcomeTitle">
        <h1>
          <div>Your future begins today.</div>
        </h1>
        </div>

          <div className='welcomeScreen'>

            <div className="buttons">
              <input type="submit" value="Start Now" onClick={this.goToSearch}/>
              <input type="submit" value="Learn More" onClick={this.goToEducation}/>
            </div>
            <input type="submit" value="Log In" onClick={this.toggleSignIn} style={{width:"320px"}}/>
          </div>
        </main>
      </div>

    );
  }
}

Welcome.contextTypes = {
  router: React.PropTypes.object
};
