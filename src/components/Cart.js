import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import Currency from './Currency';

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
        {Object.keys(Cart.tickets).map(ticket => (
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
        ))}
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
