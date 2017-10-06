/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Results extends React.PureComponent {
  constructor(){
    super();
    this.state={
    //  newsletters:[]

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

  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>

        <main>
            <div className="resultsPage">

              <header>
                <h3 className="header3.">boing boing!</h3>
              </header>

              <div className="outerDiv">

                  <div className="innerDiv"><h1 className="header1">This is Header 1.</h1></div>
                  <div className="newDiv">
                    <div className="mysticalDiv">mystical</div>
                  </div>
                  <h3 className="header3.">boing boing!</h3>
              </div>

                <h2 className="header2">This is Header 2.</h2>
                  <h2>hahahaha<div className="innerDiv">Inner Div</div>hohohoho</h2>


            <div className="filters">
                <div className="title">Filters</div>
                <div className="specialOffers">
                  <div className="title">Special Offers</div>
                  <div className="content">
                    <input type="checkBox" name="yesSpecialOffers" onChange={this.handlePassword}/>
                    <input type="checkBox" name="noSpecialOffers" onChange={this.handlePassword}/>
                  </div>
                </div>{/*End className "specialOffers"*/}

                <div className="physicalLocationAvailable">
                  <div className="title">Physical Location Available</div>
                  <div className="content">
                    <input type="checkBox" name="yesPhysicalLocationsAvailable" text="check box" onChange={this.handlePassword}/>
                    <input type="checkBox" name="noPhysicalLocationsAvailable" text="check box" onChange={this.handlePassword}/>
                  </div>
                </div>{/*End className "physicalLocationAvailable"*/}
              </div>{/*End className "filters"*/}

              <div className="sortBy">
                <div className="sortByFees"></div>
                <div className="sortByPerformance"></div>
              </div>{/*End className "sortBy"*/}

              <div className="showResults">
                {/*}<div className="specialOffers"></div>
              <div className="physicalLocationAvailable"></div>*/}
              </div>{/*End className "showResults"*/}

            </div>

        </main>

        <footer></footer>
      </div>
    );
  }
}

Results.contextTypes = {
  router: React.PropTypes.object
};
