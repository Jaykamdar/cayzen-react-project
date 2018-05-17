import React, { Component } from 'react';
import Header from './header';
import Section from './section';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      city: [],
    }
  }

  onChangeCountry=(e)=> {
    fetch("https://api.openaq.org/v1/latest?country="+e)
    .then(result => {
        return result.json();
    })
    .then(data => {
    let cities = data.results.map((city) => {
        
        return(                       
            <tr>
            <td >{city.city}</td>
            <td><table class="table table-hover">
                <tbody> 
                {city.measurements.map((measurement) => {   
                    return(       
                    <tr>                     
                        <td>{measurement.parameter} { measurement.value } { measurement.unit }</td>                        
                    </tr>
                );
                })
                    }                   
                </tbody>
                </table> 
            </td>
            </tr>
        )      
    })
    this.setState({ city : cities });
})
}

  componentDidMount(){
    fetch("https://api.openaq.org/v1/latest?country=AD")
    .then(result => {
        return result.json();
    })
    .then(data => {
      let cities = data.results.map((city) => {
        
        return(                       
            <tr>
              <td >{city.city}</td>
              <td><table class="table table-hover">
                  <tbody> 
                  {city.measurements.map((measurement) => {   
                    return(       
                      <tr>   
                            <td>{measurement.parameter} { measurement.value } { measurement.unit }</td>                    
                            <td></td>
                     </tr>
                        );
                     })
                     }                   
                  </tbody>
                </table> 
              </td>
            </tr>
        )      
      })
      this.setState({ city : cities });
    })
  }
  
  render() {

    return (
      <div class="main-wrapper">
        <Header onChangeCountry={this.onChangeCountry.bind(this)} />
        <Section city = {this.state.city} />            
      </div>
                        
    );
  }
}

export default App;