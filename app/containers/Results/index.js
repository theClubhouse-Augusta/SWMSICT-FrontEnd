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
  constructor(){
    super();
    this.state={
      products:[]

    }
  }

  componentWillMount() {
  //  this.getNewsletters();
  }

  /*getNewsletters = () => {
    fetch('http://localhost:8000/api/getNewsletters', {
      method:'get'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      this.setState({
        newsletters:json.newsletters
      })
    }.bind(this))
  };*/

  getResults = () => {

  }/*End Function*/

export default class Home extends React.PureComponent {


  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>

        <main>

          <h1 className="openingHeader">Results Page</h1>

          <div className="resultsPage">/* Currently a simple placeholder.*/
            <p>Greetings!</p>
            <div className="productSummary">
              This is where a Product Summary will be.
            </div>
            /*<div className="todoList">
            {this.state.products.map((product, index) => (
              <div className="listItem" key={index} >{product.name} {product.content}{product.fundPerformance}
              </div>
            ))}

          </div>*/
          </div>{/*End className "resultsPage"*/}

          <div className="controls">

            <div className="filters">
              <div className="title">Filters</div>

              <div className="specialOffers">
                <div className="title">Special Offers</div>

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- Yes
                </div>

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- No
                </div>
              </div>{/*End className "specialOffers"*/}

              <div className="physicalLocation">
                <div className="title">Physical Location</div>

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- Yes
                </div>

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- No
                </div>
              </div>{/*End className "physicalLocationAvailable"*/}
            </div>{/*End className "filters"*/}

            <div className="sortingOrder">
              <div className="title">Sorting Order</div>

              <div className="sortByFees">
                <div className="title">Fees</div>

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- High-Low
                </div>{/*End className "content"*/}

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- Low-High
                </div>{/*End className "content"*/}

              </div>{/*End className "sortByFees"*/}

              <div className="sortByPerformance">
                <div className="title">Fund Performance</div>

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- High-Low
                </div>{/*End className "content"*/}

                <div className="content">
                  <input type="checkBox" onChange={this.handlePassword}/> -- Low-High
                </div>{/*End className "content"*/}
              </div>{/*End className "sortByPerformance"*/}
            </div>{/*End className "sortBy"*/}
          </div>{/*End className "controls"*/}


          <SignupBox/>

        </main>


      </div>
    );
  }
}

Results.contextTypes = {
  router: React.PropTypes.object
};
