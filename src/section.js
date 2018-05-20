import React, { Component } from 'react';
import PollutionIndex from './pollutionIndex';


class Section extends Component {

  render() {
    return (
        <section>
            <div className="container-fluid">
                <table className="table table-hover" cellSpacing="3">
                    <thead>
                        <tr>
                            <td>City</td>
                            <td>Pollution</td>
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.city}
                        </tbody>
                </table>
            </div>
        </section>                        
    );
  }
}

export default Section;