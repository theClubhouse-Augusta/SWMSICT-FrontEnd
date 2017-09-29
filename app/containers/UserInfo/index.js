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
  render() {
    return (
      <div className="container">
        <Helmet title="UserInfo" meta={[ { name: 'description', content: 'Description of UserInfo' }]}/>
        <header>
          <Navbar/>
        </header>
        <form>
          <fieldset>
            <div className="directions">
              <span>Please fill in the form below (*denotes a mandatory field):</span>
              </div><br/>
            Age: <input type="text"/><br/>
            Investment Goal:
            <select>
              <option value="Retirement">Retirement</option>
              <option value="Supplemental Income">Supplemental Income</option>
              <option value="College Fund">College Fund</option>
            </select><br/>
            How much are you interested in investing?: <input type="text"/><br/>
            Will this be a recurring investment?: <input type="radio" name="choice" value="yes"/>Yes
            <input type="radio" name="choice" value="no"/>No<br/>
            Monthly Contribution: <input type="text"/><br/>
            What risk level are you interested in?:
              <div id="slidecontainer">
              <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
              </div>
            Investment Horizon: <input type="text"/><br/>
            <select>
              <option value="Retirement">1</option>
              <option value="Supplemental Income">2</option>
              <option value="College Fund">3</option>
            </select><br/>
            <select>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
              <option value="Years">Years</option>
            </select><br/>
            You may select from the list below to narrow search options if desired:<br/>
            <input type="checkbox" name="Investment" value="Stocks"/>Stocks<br/>
            <input type="checkbox" name="Options" value="Options"/>Options<br/>
            <input type="checkbox" name="Investment" value="ETFs"/>ETFs<br/>
            <input type="checkbox" name="Investment" value="Security Futures"/>Security Futures<br/>
            <input type="checkbox" name="Investment" value="Bonds"/>Bonds<br/>
            <input type="checkbox" name="Investment" value="Mutual Funds"/>Mutual Funds<br/>
            <input type="checkbox" name="Investment" value="College Savings"/>College Savings<br/>
            <input type="checkbox" name="Investment" value="Commodity Futures"/>Commodity Futures<br/>
            <input type="submit"/>
          </fieldset>
        </form>
      </div>
    );
  }
}

UserInfo.contextTypes = {
  router: React.PropTypes.object
};
