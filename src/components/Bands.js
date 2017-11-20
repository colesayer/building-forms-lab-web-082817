import React, { Component } from 'react';
import Band from './Bands.js'

class Bands extends Component {
  render(){
     const banditems = this.props.store.getState().bands.map((band, idx) => {
     return <li key={idx}>{band}</li>})



    return (
      <div>
        <ul>
          {banditems}
        </ul>
      </div>
    );
  }
};

export default Bands;
