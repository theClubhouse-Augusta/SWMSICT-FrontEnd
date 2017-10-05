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

              <div className="filters">
                <div className="title">Filters</div>
                <div className="specialOffers">
                  <div className="title">Special Offers</div>
                  <div className="content"></div>
                </div>{/*End className "specialOffers"*/}

                <div className="physicalLocationAvailable">
                  <div className="title">Physical Location Available</div>
                  <div className="content"></div>
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
