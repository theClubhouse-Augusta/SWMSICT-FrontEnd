/*
 *
 * Results
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
       products:[],
       showWouldYouLike: true,
       showSignUp: false,
       type: 'name',
       order: 'asc'
     }
   }
   componentWillMount() {
     this.getSearchData();
   }
   closeWouldYouLike = () => {
     this.setState({
       showWouldYouLike: !this.state.showWouldYouLike
     })
   }
   toggleSignUp = () => {
     this.setState({
       showWouldYouLike: false,
       showSignUp: !this.state.showSignUp
     })
   }
   getSearchData = () => {
     let data = new FormData();
     let _this = this;

     data.append('userID', 1);

     fetch ('http://localhost:8000/api/collectSearchData',{
       method: 'POST',
       body: data
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       console.log('searchData');
       console.log(json.searchData);
       _this.setState ({
         searchData:json.searchData
       }, function() {
         _this.getProducts(json.searchData, this.state.type, this.state.order);
       })
     }.bind(this))
   }


   getProducts = (searchData, type = 'name', order = 'asc', physLoc = '0', specOff = '0') => {
     let _this = this;
     let data = new FormData();
     searchData = searchData[0];

      data.append('userID', 1);
      data.append('minInvestment', searchData.minInvestment);
      data.append('riskLevel', searchData.riskLevel);
      data.append('isStock', searchData.isStock);
      data.append('isBond', searchData.isBond);
      data.append('isMutualFund', searchData.isMutualFund);
      data.append('isETF', searchData.isETF);
      data.append('isIndexFund', searchData.isIndexFund);
      data.append('isRetirement', searchData.isRetirement);


      console.log('data');
      console.log(searchData);


     this.setState({
       displayOptions: []
     });

     fetch ('http://localhost:8000/api/getProducts/'+type+'/'+order+'/'+physLoc+'/'+specOff,{
       method: 'POST',
       body: data
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       console.log('resultProducts');
       console.log(json.resultProducts);
       console.log('searchCriteria');
       console.log(json.searchCriteria);
       _this.parseResults(json.searchCriteria);
       _this.setState({
         getProducts:json.resultProducts,
         message:json.message,
         messageNum:json.messageNum
       })
       _this.forceUpdate();
     }.bind(this))
   }

   parseResults = (data) => {

     let displayOptions = this.state.displayOptions;
     let minInvestment = '$' + data[1];
     let riskLevel = '';

     if (data.length > 0) {
       if (data[0] == 1) {
         riskLevel = 'Aggressive';
       }
       else if (data[0] == 2) {
         riskLevel = 'Moderate';
       }
       else if (data[0] == 3) {
         riskLevel:'Conservative';
       }
     }
     let temp = '';
     for (let x = 2; x < data.length; x++) {

         if (x < data.length - 1) {
             temp = data[x] + ', ';
         }
         else {
           temp = data[x];
         }

         displayOptions.push(temp);

         this.setState({
           displayRiskLevel:riskLevel,
           displayOptions:displayOptions,
           displayMinInvestment:minInvestment
         })
     }
   }
   renderResults = () => {
     if(this.state.messageNum !== ''){

       if(this.state.messageNum == 1){
         let options = <span>{this.state.displayOptions}</span>;
         return (
           <div>
             <div>
             Results: {this.state.getProducts.length}<br/>
             <br/>
               You searched on: Risk level ({this.state.riskLevel}), Minimum investment ({this.state.displayMinInvestment})
             </div>
             <div>
               Products: {options}<br/><br/>
             </div>
               {this.state.message}<br/><br/>
               {this.state.getProducts.map((product,index)=>(
                   <div>
                   <div><h3>{product.name}</h3></div>
                   <div><h4>{product.summary}</h4></div>
                   <span>Risk level: {product.riskLevel} </span><span>Minimum investment: ${product.minInvestment} </span><span>Type of investment: {product.isStock} / Fees: {product.fees} / Perf: {product.performance} {product.physicalLocationAvailable} {product.specialOffersAvailable}</span>
                   <div><br/><br/></div>
                   </div>

               ))}
           </div>
         )
       }
       else if (this.state.messageNum == 0) {
         console.log(this.state.messageNum + 'hiya');
         return (
           <div>
           <div>
             You searched on: Risk level ({this.state.displayRiskLevel}), Minimum investment (${this.state.searchCriteria[1]})
           </div>
           <div>
             Products: {this.state.displayOptions}<br/><br/>
           </div>
             {this.state.message}
           </div>
         )
       }
       else {
         return (
           <div></div>
         );
       }
     }
   }
   filterByFee = (event) => {
    if(event.target.value == 1) {
     this.getProducts(this.state.searchData, 'fees', 'asc', '0', '0');
    }
    else {
      this.getProducts(this.state.searchData, 'fees', 'desc', '0', '0');
    }
  }
  filterByPerformance = (event) => {
    if(event.target.value == 1) {
     this.getProducts(this.state.searchData, 'performance', 'asc', '0', '0');
    }
    else {
      this.getProducts(this.state.searchData, 'performance', 'desc', '0', '0');
    }
  }
  filterByLocations = (event) => {
    if(event.target.value == 1){
      this.getProducts(this.state.searchData, 'name', 'asc', '1', '0');
    }
    else {
      this.getProducts(this.state.searchData, 'name', 'asc', '0', '0');
    }
  }
  filterBySpecOff = (event) => {
    if(event.target.value == 1){
      this.getProducts(this.state.searchData, 'name', 'asc', '0', '1');
    }
    else {
      this.getProducts(this.state.searchData, 'name', 'asc', '0', '0');
    }
  }
  render() {
    return (
      <div className="container resultsBackground">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>

	       <WouldYouLike closeWouldYouLike={this.closeWouldYouLike} 	toggleSignUp={this.toggleSignUp} openWouldYouLike={this.state.showWouldYouLike}/>
         <SignupBox toggleSignUp={this.toggleSignUp} openSignUp={this.state.showSignUp}/>

        <main>
          <section className="resultsBanner">
            <h1>
              Search Results
            </h1>
            <p>
              The following investment products have been curated with your goals in mind.
            </p>
            <p>
              Use the filters below to further refine your results.
            </p>
          </section>

          <div className="resultsFilters">
            <div className="feesFilter">
              <select>
                <option value="" disabled selected>Fees & Expenses</option>
                <option value="1">High to Low</option>
                <option value="2">Low to High</option>
              </select>
            </div>
            <div className="performanceFilter">
              <select>
                <option value="" disabled selected>Performance</option>
                  <option value="1">High to Low</option>
                  <option value="2">Low to High</option>
              </select>
            </div>
            <div className="specialOffersFilter">
              <select>
                <option value="" disabled selected>Special Offers</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="locationFilter" default="SpecialOffers">
              <select>
                <option value="" disabled selected>Physical Location</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          <div className="resultBox">
            <div className="result">
              <div className="companyTitle"></div>
              <div className="productName"></div>
              <div className="resultDescription"></div>
            </div>
          </div>
        </div>
      </main>
      {this.renderResults()}
    </div>
    );
  }
}

Results.contextTypes = {
  router: React.PropTypes.object
};
