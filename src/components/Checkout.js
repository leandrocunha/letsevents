import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.paymentMethod = this.paymentMethod.bind(this);
  }

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
          <option>Forma de pagamento</option>
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
