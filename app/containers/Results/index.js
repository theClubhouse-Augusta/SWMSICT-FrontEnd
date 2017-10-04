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

export default class Home extends React.PureComponent {
  constructor(){
    super();
    this.state={
      newsletters:[]

    }
  }

  componentWillMount() {
    this.getNewsletters();
  }

  getNewsletters = () => {
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
  };

  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>

        <main>
            <div className="newsColumn">
              {this.state.newsletters.map((newsletter,index)=>(
                <a href={newsletter.url} className="newsItem">
                    <div className="newsLogo">
                    <img className="logoImage" src={newsletter.logo}/>
                    </div>
                    <div className="newsInfo">
                        <div className="newsTitle">{newsletter.title}</div>
                        <div className="newsDescription">{newsletter.description}</div>
                    </div>
                </a>
              ))}


            </div>

        </main>

        <footer></footer>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
