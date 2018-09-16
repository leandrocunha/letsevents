import React from 'react';
import { connect } from 'react-redux';
import Currency from './Currency';

const getTotal = cart => {
  const total = [];

  Object.keys(cart).map(ticket => {
    total.push(cart[ticket]['qty'] * cart[ticket]['price']);
  });

  const formatedTotal = total.length
    ? total.reduce((a, b) => a + b)
    : 0;

  return formatedTotal;
};

const Cart = ({ tickets }) => {
  return (
    <div className="Cart">
      <p className="Cart__Title">Carrinho de compras:</p>
      <ul className="Cart__ItemsList">
        {Object.keys(tickets).map((ticket, index) => (
          <li className="Cart__ItemsList__Item" key={index}>
            <span>
              <strong>{ticket}</strong>
              <br />
              {`${tickets[ticket]['qty']}x`}{' '}
              <Currency value={tickets[ticket]['price']} />
            </span>
            <span>
              <Currency
                value={
                  tickets[ticket]['qty'] * tickets[ticket]['price']
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="Cart__Total">
        <Currency value={getTotal(tickets)} />
      </p>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Cart);
