import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Batch from './Batch';

class Offer extends Component {
  constructor(props) {
    super(props);

    /**
     * Define initial local state
     * @param {number} available - The number of the batch should be available at init
     * @example { available: 1 }
     */
    this.state = { available: 1 };

    /** Bind the onChange() function to set the quantity of items will be purchased. */
    this.onChange = this.onChange.bind(this);
  }

  /**
   * onChange() function dispatch a action to save the quantity of items will be purchased and save it at app state.
   * @param {number} qty - The quantity of items will be purchased
   * @param {number} price - The value of each item
   * @param {Array} fees - An array of objects with price and fee for each payment method.
   * @param {number} limit - The maximum value to available tickets
   * @param {number} batch - The number of batch related to order
   * @example onChange(1, 10, [{due_amount: 12, due_service_fee: 2, payment_type: 'BANK-SLIP'}]) {
   *  //do something
   * }
   */
  onChange(qty, price, fees, limit, batch) {
    const { dispatch, name } = this.props;

    if (qty === limit) {
      this.setState({ available: batch + 1 });
    } else {
      this.setState({ available: batch });
      dispatch({
        type: 'CART/CLEAR',
        payload: { ticket: name, batch: batch + 1 },
      });
    }

    dispatch({
      type: 'CART',
      payload: {
        ticket: name,
        qty: Number(qty),
        batch,
        price,
        fees,
      },
    });
  }

  render() {
    const { name, batches, description } = this.props;
    const { available } = this.state;

    return (
      <div className="Offer">
        <h3 className="Offer__Name">{name}</h3>
        <p className="Offer__Description">{description}</p>
        {batches.map(batch => (
          <Batch
            key={batch.id}
            available={batch.number <= available}
            onChange={this.onChange}
            {...batch}
          />
        ))}
      </div>
    );
  }
}

Offer.propTypes = {
  name: PropTypes.string.isRequired,
  batches: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string.isRequired,
};

export default connect()(Offer);
