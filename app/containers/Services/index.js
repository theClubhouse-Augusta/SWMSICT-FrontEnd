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
              <img src={require("../../photos/goal.svg")}/>
              <h2>
                Define Your Goal
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="riskBox">
              <img src={require("../../photos/risk.svg")}/>
              <h2>
                Determine Risk Tolerance
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="productBox">
              <img src={require("../../photos/products.svg")}/>
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
              Defining Your Goal
            </h2>
            <p>
              Spicy jalapeno bacon ipsum dolor amet prosciutto ham chicken, sirloin eiusmod sausage excepteur. Irure flank shoulder do tri-tip, ground round pancetta sausage. Jowl corned beef excepteur beef ribs anim, tri-tip picanha capicola enim reprehenderit rump. Occaecat consequat aute, sint cow capicola velit rump id tempor qui pariatur incididunt.
            </p><br/>
            <p>
              Spare ribs brisket beef ribs, andouille ground round in cupim mollit. Aliquip tongue hamburger filet mignon, rump ut chuck irure ribeye culpa picanha. Nulla quis sunt pariatur ground round nisi. Andouille brisket spare ribs pork belly, dolore capicola leberkas culpa turkey burgdoggen mollit velit in ham shoulder. Kielbasa sunt enim, ipsum t-bone alcatra cillum frankfurter sausage pastrami fatback. Dolore in leberkas tenderloin enim. Spare ribs strip steak non cupim sunt, short ribs officia tri-tip boudin chicken nulla jowl aute hamburger.
            </p><br/>
            <h2>
              Risk Tolerance
            </h2>
            <p>
              Spicy jalapeno bacon ipsum dolor amet prosciutto ham chicken, sirloin eiusmod sausage excepteur. Irure flank shoulder do tri-tip, ground round pancetta sausage. Jowl corned beef excepteur beef ribs anim, tri-tip picanha capicola enim reprehenderit rump. Occaecat consequat aute, sint cow capicola velit rump id tempor qui pariatur incididunt.
            </p><br/>
            <p>
              Spare ribs brisket beef ribs, andouille ground round in cupim mollit. Aliquip tongue hamburger filet mignon, rump ut chuck irure ribeye culpa picanha. Nulla quis sunt pariatur ground round nisi. Andouille brisket spare ribs pork belly, dolore capicola leberkas culpa turkey burgdoggen mollit velit in ham shoulder. Kielbasa sunt enim, ipsum t-bone alcatra cillum frankfurter sausage pastrami fatback. Dolore in leberkas tenderloin enim. Spare ribs strip steak non cupim sunt, short ribs officia tri-tip boudin chicken nulla jowl aute hamburger.
            </p><br/>
            <h2>
              Product Types
            </h2>
            <p>
              Spicy jalapeno bacon ipsum dolor amet prosciutto ham chicken, sirloin eiusmod sausage excepteur. Irure flank shoulder do tri-tip, ground round pancetta sausage. Jowl corned beef excepteur beef ribs anim, tri-tip picanha capicola enim reprehenderit rump. Occaecat consequat aute, sint cow capicola velit rump id tempor qui pariatur incididunt.
            </p><br/>
            <p>
              Spare ribs brisket beef ribs, andouille ground round in cupim mollit. Aliquip tongue hamburger filet mignon, rump ut chuck irure ribeye culpa picanha. Nulla quis sunt pariatur ground round nisi. Andouille brisket spare ribs pork belly, dolore capicola leberkas culpa turkey burgdoggen mollit velit in ham shoulder. Kielbasa sunt enim, ipsum t-bone alcatra cillum frankfurter sausage pastrami fatback. Dolore in leberkas tenderloin enim. Spare ribs strip steak non cupim sunt, short ribs officia tri-tip boudin chicken nulla jowl aute hamburger.
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
