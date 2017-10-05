/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Contact.contextTypes = {
  router: React.PropTypes.object
};
