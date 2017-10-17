/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import SignupBox from 'components/SignupBox';
import SignInBox from 'components/SignInBox';
import WouldYouLike from 'components/WouldYouLike';
import './style.css';
import './styleM.css';


export default class Results extends React.PureComponent {
  render() {
    return (
      <div className="container resultsBackground">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>


        <main>
          <section className="resultsBanner">
            <h1>
              Search Results
            </h1>
            <p>
              The following investment products have been curated with your goals in mind.
            </p>
            <p>
              Use the filters below to further refine your results.
            </p>
          </section>

          <div className="resultsFilters">
            <div className="feesFilter">
              <select>
                <option value="" disabled selected>Fees & Expenses</option>
                <option value="1">High to Low</option>
                <option value="2">Low to High</option>
              </select>
            </div>
            <div className="performanceFilter">
              <select>
                <option value="" disabled selected>Performance</option>
                  <option value="1">High to Low</option>
                  <option value="2">Low to High</option>
              </select>
            </div>
            <div className="specialOffersFilter">
              <select>
                <option value="" disabled selected>Special Offers</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="locationFilter" default="SpecialOffers">
              <select>
                <option value="" disabled selected>Physical Location</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          <div className="resultBox">
            <div className="result">
              <div className="companyTitle"></div>
              <div className="productName"></div>
              <div className="resultDescription"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
  }
}

Results.contextTypes = {
  router: React.PropTypes.object
};
