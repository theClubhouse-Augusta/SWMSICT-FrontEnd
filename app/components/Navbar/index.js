/**
*
* Navbar
*
*/

import React from 'react';
import { Link } from 'react-router';

import './style.css';
import './styleM.css';

import Bars from 'react-icons/lib/fa/bars';

export default class Navbar extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      menuOpen:false,
      token:sessionStorage.getItem("token")
    }
  }

  signOut = () => {
    sessionStorage.removeItem("token");
    this.setState({
      token:""
    })
  }

  handleMenu = () => {
    if(this.state.menuOpen === true)
    {
      this.setState({
        menuOpen:false
      })
    }
    else if (this.state.menuOpen === false)
    {
      this.setState({
        menuOpen:true
      })
    }
  }
  renderMenu(){
    if(this.state.menuOpen === true) {
      return(
        <nav className="navMobile">
          <Link to="/" className="navButton">Home</Link>
          <Link to="/Submission" className="navButton">Submission</Link>
          <Link to="Login" className="Login">Login</Link>
        </nav>
      )
    }
  }

  render() {
    let loginButton ="";
    if(this.state.token===""||this.state.token==undefined){
      loginButton=<Link to="/Login" className="navButton">LOGIN</Link>;
    }
    else{
      loginButton=<div onClick={this.signOut} className="navButton">SIGN OUT</div>;
    }

    return (
      <div>
        <nav className="navBar">
          <div className="siteName">
            <img src={require("../../photos/logo.png")} className="homeLogo"/>
          </div>
          <div className="nav">
            <Link to="/" className="navButton">HOME</Link>
            <Link to="/UserInfo" className="navButton">SEARCH</Link>
            <Link to="/About" className="navButton">ABOUT</Link>
            <Link to="/Services" className="navButton">SERVICES</Link>
            <Link to="/Contact" className="navButton">CONTACT</Link>
            {loginButton}
          </div>
          <Bars className="menuIcon" onClick={this.handleMenu}/>
        </nav>
        {this.renderMenu()}
      </div>


    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object
};
