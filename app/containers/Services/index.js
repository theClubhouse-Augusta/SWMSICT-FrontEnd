/*
 *
 * Services
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Services extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Services" meta={[ { name: 'description', content: 'Description of Services' }]}/>

        <header>

        </header>

        <main>
          <div className="servicesBanner">
            <Navbar/>
            <h1>
              Investing Made Simple
            </h1>
            <p>
              Investing can be intimidating. It doesn't have to be.
              <div>
              Start building toward your goal in seconds using our 3 step approach.
              </div>
            </p>
          </div>
          <section className="servicesImageBoxes">
            <label className="goalBox">
              <img src={require("../../photos/services-goal.svg")}/>
              <h2>
                Define Your Goal
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="riskBox">
              <img src={require("../../photos/services-risk.svg")}/>
              <h2>
                Determine Risk Tolerance
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="productBox">
              <img src={require("../../photos/services-products.svg")}/>
              <h2>
                Choose Products
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
          </section>

          <section className="servicesInfo">
            <h2>
              Our Story is Your Story
            </h2><br/>
            <p>
              When comparing wealth management companies, you think to yourself - why them? It is understandably a difficult decision to entrust an individual, or yourself, to make decisions that will ultimately affect not only your wealth, but your family’s future. Fortunately, Strategic Wealth Management Solutions connects investors with companies and products that match their unique goals and preferences.
            </p><br/>
            <p>
              Founded in 2017 and based in Augusta, Georgia, SWMS is a trusted community for investors. We have partnered with several institutions to bring you a one-stop shop for your investing and debt management needs. Simply enter some basic information on our homepage and you will receive recommended portfolios from industry-leading organizations tailored to your needs. Whether you are interested in investing for retirement, your child’s college education, or prefer to work with a local financial advisor, SWMS will help you invest today, for a wealthier future tomorrow.
            </p>
          </section>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

Services.contextTypes = {
  router: React.PropTypes.object
};
