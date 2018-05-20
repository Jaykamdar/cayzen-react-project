import React, { Component } from 'react';
import PollutionIndex from './pollutionIndex';


class Section extends Component {

  render() {
    return (
        <section>
            <div class="container-fluid">
                <table class="table table-hover" cellspacing="3">
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