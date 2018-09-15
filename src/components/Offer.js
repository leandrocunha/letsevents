import React, { Component } from 'react';
import Batch from './Batch';

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = { available: 1 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value, limit, id) {
    this.setState({ value, limit, id });
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        {this.props.batches.map(batch => (
          <Batch
            key={batch.id}
            onChange={this.onChange}
            available={batch.number === this.state.available}
            {...batch}
          />
        ))}
      </div>
    );
  }
}

export default Offer;
