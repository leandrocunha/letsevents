import React, { Component } from 'react';
import { connect } from 'react-redux';
import Batch from './Batch';

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = { available: 1 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(qty, price, fees) {
    const { dispatch } = this.props;

    dispatch({
      type: 'CART',
      payload: {
        [String(this.props.name).toLowerCase()]: {
          qty: Number(qty),
          price,
          fees,
        },
      },
    });
  }

  render() {
    return (
      <div className="Offer">
        <h3 className="Offer__Name">{this.props.name}</h3>
        <p className="Offer__Description">{this.props.description}</p>
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

export default connect()(Offer);
