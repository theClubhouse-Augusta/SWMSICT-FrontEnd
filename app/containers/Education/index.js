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
      <div className="container">
        <Helmet title="Education" meta={[ { name: 'description', content: 'Description of Education' }]}/>

        <header>

        </header>

        <main>
          <div className="educationBanner">
            <Navbar/>
            <h1>
              Investing 101
            </h1>
            <p>
            </p>
          </div>
          <section className="imageBoxes">
            <label className="compoundInterestBox">
              <img src={require("../../photos/education-compoundinterest.svg")}/>
              <h2>
                Compound Interest
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="educationProductBox">
              <img src={require("../../photos/education-products.svg")}/>
              <h2>
                Types of Funds
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="educationPerformanceBox">
              <img src={require("../../photos/education-performance.svg")}/>
              <h2>
                Fund Performance
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
            <label className="educationExpensesBox">
              <img src={require("../../photos/education-expenses.svg")}/>
              <h2>
                Expenses & Fees
              </h2>
              <p>
                Bacon ipsum dolor amet drumstick ham rump sirloin landjaeger tri-tip capicola prosciutto beef ribs shankle.
              </p>
            </label>
          </section>

          <section className="educationInfo">
            <h3>
              Compound Interest
            </h3>
            <h4>
              What type of stock do I what?
            </h4>
            <p>
              Spicy jalapeno bacon ipsum dolor amet prosciutto ham chicken, sirloin eiusmod sausage excepteur. Irure flank shoulder do tri-tip, ground round pancetta sausage. Jowl corned beef excepteur beef ribs anim, tri-tip picanha capicola enim reprehenderit rump. Occaecat consequat aute, sint cow capicola velit rump id tempor qui pariatur incididunt.
            </p><br/>
            <p>
              Spare ribs brisket beef ribs, andouille ground round in cupim mollit. Aliquip tongue hamburger filet mignon, rump ut chuck irure ribeye culpa picanha. Nulla quis sunt pariatur ground round nisi. Andouille brisket spare ribs pork belly, dolore capicola leberkas culpa turkey burgdoggen mollit velit in ham shoulder. Kielbasa sunt enim, ipsum t-bone alcatra cillum frankfurter sausage pastrami fatback. Dolore in leberkas tenderloin enim. Spare ribs strip steak non cupim sunt, short ribs officia tri-tip boudin chicken nulla jowl aute hamburger.
            </p><br/>
            <h3>
              Types of Funds
            </h3>
            <p>
              Spicy jalapeno bacon ipsum dolor amet prosciutto ham chicken, sirloin eiusmod sausage excepteur. Irure flank shoulder do tri-tip, ground round pancetta sausage. Jowl corned beef excepteur beef ribs anim, tri-tip picanha capicola enim reprehenderit rump. Occaecat consequat aute, sint cow capicola velit rump id tempor qui pariatur incididunt.
            </p><br/>
            <p>
              Spare ribs brisket beef ribs, andouille ground round in cupim mollit. Aliquip tongue hamburger filet mignon, rump ut chuck irure ribeye culpa picanha. Nulla quis sunt pariatur ground round nisi. Andouille brisket spare ribs pork belly, dolore capicola leberkas culpa turkey burgdoggen mollit velit in ham shoulder. Kielbasa sunt enim, ipsum t-bone alcatra cillum frankfurter sausage pastrami fatback. Dolore in leberkas tenderloin enim. Spare ribs strip steak non cupim sunt, short ribs officia tri-tip boudin chicken nulla jowl aute hamburger.
            </p><br/>
            <h3>
              Fund Performance
            </h3>
            <p>
              Spicy jalapeno bacon ipsum dolor amet prosciutto ham chicken, sirloin eiusmod sausage excepteur. Irure flank shoulder do tri-tip, ground round pancetta sausage. Jowl corned beef excepteur beef ribs anim, tri-tip picanha capicola enim reprehenderit rump. Occaecat consequat aute, sint cow capicola velit rump id tempor qui pariatur incididunt.
            </p><br/>
            <p>
              Spare ribs brisket beef ribs, andouille ground round in cupim mollit. Aliquip tongue hamburger filet mignon, rump ut chuck irure ribeye culpa picanha. Nulla quis sunt pariatur ground round nisi. Andouille brisket spare ribs pork belly, dolore capicola leberkas culpa turkey burgdoggen mollit velit in ham shoulder. Kielbasa sunt enim, ipsum t-bone alcatra cillum frankfurter sausage pastrami fatback. Dolore in leberkas tenderloin enim. Spare ribs strip steak non cupim sunt, short ribs officia tri-tip boudin chicken nulla jowl aute hamburger.
            </p><br/>
            <h3>
              Expenses & Fees
            </h3>
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
                <img src={require("../../photos/education-rocket.svg")}/>
                <h3>
                  Buckle Up
                </h3><br/>
                <p>
                  We've taken the guesswork out of investing. Complete our FREE 3 Step Profile Planner to review investment options that line up with YOUR goals. Investing has never been easier.
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
