import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);

    /** Bind paymentMethod() function to set the kind of selected payment method. */
    this.paymentMethod = this.paymentMethod.bind(this);
  }

  /**
   * paymentMethod() function get the name of selected payment method and dispact action to save at app state.
   * @param {string} value - The name of selected payment method.
   */
  paymentMethod(value) {
    const { dispatch } = this.props;
    dispatch({ type: 'CHECKOUT/PAYMENT_METHOD', payload: value });
  }

  render() {
    return (
      <div className="Checkout">
        <select
          className="Select"
          onChange={({ target }) => this.paymentMethod(target.value)}
        >
          <option value="">Forma de pagamento</option>
          <option value="BANK_SLIP">Boleto bancário</option>
          <option value="CREDIT">Cartão de crédito</option>
        </select>
        <button className="Button Button--primary">
          Finalizar compra
        </button>
      </div>
    );
  }
}

export default connect()(Checkout);
