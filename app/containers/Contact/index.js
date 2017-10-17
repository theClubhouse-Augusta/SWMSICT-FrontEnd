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
          </div>
          <section className="contactForm">
            <div className="contactInfo">
              <label className="contactInfoEmail">
                <img src={require("../../photos/contact-email.svg")}/>
                <p>
                  support@swms.com
                </p><br/>
              </label>
              <label className="contactInfoPhone">
                <img src={require("../../photos/contact-phone.svg")}/>
                <p>
                  (555)234-6789
                </p><br/>
              </label>
              <label className="contactInfoAddress">
                <img src={require("../../photos/contact-address.svg")}/>
                <p>
                  123 Wealth Ave, Augusta, GA 30901
                </p><br/>
              </label>
              <label className="contactInfoSocial">
                <img src={("../../photos/social-facebook.svg")}/>
                <img src={("../../photos/social-twitter.svg")}/>
                <img src={("../../photos/social-linkedin.svg")}/>
              </label>
            </div>
            <div className="contactInput">
              <input type="text" name="contactName" maxlength="40" placeholder="Name" required/><br/>
              <input type="text" name="contactEmail" placeholder="Email" required/><br/>
              <textarea className="contactTextbox" cols="100" rows="5" placeholder="Inquiry">
              </textarea>
              <br/>
              <input type="submit" value="Submit"/>
            </div>
          </section>
          <section className="contactBottomBorder">
          </section>
        </main>
      </div>
    );
  }
}

Contact.contextTypes = {
  router: React.PropTypes.object
};
