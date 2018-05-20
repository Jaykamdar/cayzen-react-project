import React, { Component } from 'react';

class PollutionIndex extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
      ozoneLevel: [] = [0, 50, 100, 168, 208, 784],
      aqiClass: [] = ['good', 'good', 'satisfactory', 'moderately', 'poor', 'very poor', 'sever'],
    }
  }

  render() {
   this.state.ozoneLevel.push(this.props.pollution);
   console.log(this.props.pollution);
    this.state.data = [].concat(this.state.ozoneLevel)
    .sort((a, b) => a - b)
    .map((item, i) => item);
       
    return (
        
     <p class={this.state.aqiClass[this.state.data.indexOf(this.props.pollution)]}></p>
    
    );
  }
}

export default PollutionIndex;