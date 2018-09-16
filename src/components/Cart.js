import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import Currency from './Currency';

/**
 * getTotal() function return the total orders based on kind of payment method are selected.
 * @param {Object} tickets An object with kind of tickets user wants to buy
 * @param {string} paymentMethod The name of payment method.
 * @example getTotal({duke: {qty: 3, price: 25000, fee: [...]}}, 'BANK_SLIP'){...}
 */
const getTotal = (tickets, paymentMethod) => {
  const total = [];

  Object.keys(tickets).map(ticket => {
    let qty = tickets[ticket]['qty'];

    if (paymentMethod) {
      let fee = tickets[ticket]['fees'].filter(
        ({ payment_type }) => payment_type === paymentMethod
      );
      total.push(qty * fee[0]['due_amount']);
    } else {
      total.push(qty * tickets[ticket]['price']);
    }
  });

  return total.length ? total.reduce((a, b) => a + b) : 0;
};

/**
 * getFee() function return value according the selected payment method.
 * @param {string} paymentMethod - The name of selected payment method.
 * @param {Array} fees - An array of objects with price and fee for each payment method.
 * @returns {number} 1000
 * @example getFee('BANK-SLIP', [{due_amount: 12, due_service_fee: 2, payment_type: 'BANK-SLIP'}]) {
 *  //do something
 * }
 */
const getFee = (paymentMethod, fees) => {
  if (!paymentMethod) {
    return 0;
  }

  const fee = fees.filter(fee => fee.payment_type === paymentMethod);

  return fee[0]['due_service_fee'];
};

const Cart = ({ Cart, Checkout }) => {
  return (
    <div className="Cart">
      <p className="Cart__Title">Carrinho de compras:</p>
      <ul className="Cart__ItemsList">
        {/* {Object.keys(Cart.tickets).map(ticket => (
          <CartItem
            key={ticket}
            fee={getFee(
              Checkout.payment_method,
              Cart.tickets[ticket]['fees']
            )}
            name={ticket}
            paymentMethod={Checkout.payment_method}
            price={Cart.tickets[ticket]['price']}
            quantity={Cart.tickets[ticket]['qty']}
            cart={{ ...Cart }}
            checkout={{ ...Checkout }}
          />
        ))} */}
      </ul>
      <p className="Cart__Total">
        <Currency
          value={getTotal(Cart.tickets, Checkout.payment_method)}
        />
      </p>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Cart);
