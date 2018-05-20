import React, { Component } from 'react';

class Header extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
    };
  }

  onChange_Country(e){
    this.props.onChangeCountry(e.target.value);
  }
  componentDidMount(){

    fetch("https://api.openaq.org/v1/countries")
    .then(result => {
      return result.json();
    })
    .then(data => {
      let countries = data.results.map((country) => {
        return(                       
          <option key={country.code} value={country.code}>{ country.name }</option>              
          )
        })
        this.setState({data : countries });
      })      
    }
    
    render() {

      return (

      <header>
      <div className="container-fluid">
      <form>
      <div className="row">  						
      <div className="col-xs-4 form-group">
      <label>Country</label>
      <select className="form-control" id="country" onChange={(e)=>this.onChange_Country(e)}>
      {this.state.data}
      </select>
      </div>                    
      </div>
      </form>
      </div>
      </header>
      
      );
    }
  }

  export default Header;