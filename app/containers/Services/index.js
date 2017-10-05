/*
 *
 * Services
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Services extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Services" meta={[ { name: 'description', content: 'Description of Services' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Services.contextTypes = {
  router: React.PropTypes.object
};
