/**
*
* WouldYouLike
*
*/

import React from 'react';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class WouldYouLike extends React.PureComponent {
  render() {
    if(this.props.openWouldYouLike === true && sessionStorage.getItem('userID') == "0")
    {
      return (
        <div className="wouldYouLikeBox">
          <div className="wouldYouLikeHeader">
              <div className="closeX">
                <p>
                  <span>
                    <FaClose className="x" onClick={this.props.closeWouldYouLike}/>
                  </span>
                </p>
              </div>
          </div>
          <br/>
          <div className="wouldYouLikeContent">
            <h3>
              Would You Like to Save Your Results?
            </h3><br/>
            <p>Not sure you're ready to invest yet? Just browsing potential options? Create an account with SWMS to store your investment preferences and search results for future use!</p>
            <br/>
            <p>Would you like to create an account now?</p>
            <div className="wouldYouLikeButtonBox">
              <div>
                <input type="button" className="wouldYouLikeButton" value="Yes, Please!" onClick={this.props.toggleSignUp}></input>
              </div>
              <div>
                <input type="button" className="wouldYouLikeButton" value="No Thanks" onClick={this.props.closeWouldYouLike}></input>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

WouldYouLike.contextTypes = {
  router: React.PropTypes.object
};
