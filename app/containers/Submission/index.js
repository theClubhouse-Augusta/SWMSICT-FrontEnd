/*
 *
 * Submission
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Submission extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      companyName: "",
      newsletterTitle: "",
      newsletterURL: "",
      description: "",
      logo: "",
      token:sessionStorage.getItem("token")
    }
  }

  componentWillMount(){
    this.checkToken();
  }

  checkToken = () => {
    if(this.state.token==undefined){
      this.context.router.push("/Login");
    }
  }

  handleCompanyName = (event) => {
    this.setState({
      companyName:event.target.value
    })
  };

  handleNewsletterTitle = (event) => {
    this.setState({
      newsletterTitle:event.target.value
    })
  };

  handleNewsletterURL = (event) => {
    this.setState({
      newsletterURL:event.target.value
    })
  };

  handleDescription = (event) => {
    this.setState({
      description:event.target.value
    })
  };

  handleLogo = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        logo: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  storeNewsletter = () => {
    console.log(JSON.stringify(this.state))
    let _this = this;
    let data = new FormData();
    data.append('companyName', this.state.companyName);
    data.append('title', this.state.newsletterTitle);
    data.append('url', this.state.newsletterURL);
    data.append('description', this.state.description);
    data.append('logo', this.state.logo);

    fetch('http://localhost:8000/api/storeNewsletter', {
      method:'POST',
      body:data,
      headers:{"Authorization":"Bearer "+this.state.token}
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error){
        alert(json.error);
      }
      else if(json.success) {
        alert(json.success);
        _this.context.router.push('/')
      }


    })

  }


  render() {
    return (
      <div className="container subBackground">
        <Helmet title="Submission" meta={[ { name: 'description', content: 'Description of Submission' }]}/>

        <header>
          <Navbar/>
        </header>
        <main>
            <div className="newsSubmission">
              <h1>Newsletter Submission</h1><br/>
              <p>Company Name</p>
              <input type="text" name="Company Name" maxlength="40" required onChange={this.handleCompanyName}/><br/>
              <p>Newsletter Title</p>
              <input type="text" name="Newsletter Title" required onChange={this.handleNewsletterTitle}/><br/>
              <p>Newsletter URL</p>
              <input type="text" name="Newsletter URL" required onChange={this.handleNewsletterURL}/>
              <p>Description</p>
              <input type="text" name="Description" maxlength="40" required onChange={this.handleDescription}/><br/>
              <p>Upload Your Company Logo</p><br/>
              <div className="uploadButton">
                <input type="file" name="fileToUpload" id="fileToUpload" required onChange={this.handleLogo}/>
              </div>
              <input type="submit" value="Submit" onClick={this.storeNewsletter}/>
            </div>
        </main>
      </div>
    );
  }
}

Submission.contextTypes = {
  router: React.PropTypes.object
};
