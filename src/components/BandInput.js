import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ""
  }

  handleChange = (event) => this.setState({text: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a Band</label>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
        {this.state.band}
      </div>
    );
  }
};

export default BandInput;
