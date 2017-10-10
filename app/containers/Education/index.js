/*
 *
 * Education
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Education extends React.PureComponent {
  render() {
    return (
      <div className="container background">
        <Helmet title="Education" meta={[ { name: 'description', content: 'Description of Education' }]}/>

        <header>

        </header>

        <main>
          <div className="educationBanner">
            <Navbar/>
            <h1>
              Investing Made Easy
            </h1>
            <p>
              Demystifying Investing with 3 Simple Steps
            </p>
          </div>
          <section className="imageBoxes">
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

          <section className="educationInfo">
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

          <section>
            <section className="startNowBox">
              <div className="startNowButton">
                <img src={require("../../photos/rocket.svg")}/>
                <h2>
                  Buckle Up
                </h2><br/>
                <p>
                  We've taken the guesswork out of investing. Complete our
                  <div>
                  FREE 3 Step Profile Planner to review investment options that line up with YOUR goals.
                  </div>
                  <div>
                  It doesn't get any easier than this.
                  </div>
                </p>
                <input type="button" value="Start Now"/>
              </div>
            </section>
          </section>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

Education.contextTypes = {
  router: React.PropTypes.object
};
