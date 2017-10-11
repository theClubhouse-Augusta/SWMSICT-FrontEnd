/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className="container contactBackground">
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>
        <header>
        </header>
        <main>
          <div className="contactBanner">
            <Navbar/>
            <h1>
              Get in Touch
            </h1>
            <p>
              We're Here to Support You Through Your Investing Journey
            </p>
          </div>
          <section className="contactForm">
            <div className="contactInfo">
              <h2>
                Types of Funds
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </div>
            <div className="contactInput">
              <p>Name</p>
              <input type="text" name="contactName" maxlength="40" required/><br/>
              <p>Email</p>
              <input type="text" name="contactEmail" required/><br/>
              <p>Message</p>
              <input className="contactMessage" type="text" name="contactMessage" required/><br/>
              <input type="submit" value="Submit"/>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

Contact.contextTypes = {
  router: React.PropTypes.object
};
