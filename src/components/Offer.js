import React, { Component } from 'react';
import Batch from './Batch';

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = { available: 1 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        {this.props.batches.map(batch => (
          <Batch
            key={batch.id}
            available={batch.number === this.state.available}
            onChange={this.onChange}
            {...batch}
          />
        ))}
      </div>
    );
  }
}

export default Offer;
