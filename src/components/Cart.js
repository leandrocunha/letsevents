import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const getTotal = cart => {
  const total = [];

  Object.keys(cart).map(ticket => {
    total.push(cart[ticket]['qty'] * cart[ticket]['price']);
  });

  const formatedTotal = total.length
    ? total.reduce((a, b) => a + b)
    : 0;

  return formatedTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
};

const Cart = ({ tickets }) => {
  return (
    <Fragment>
      <p>Carrinho de compras:</p>
      {Object.keys(tickets).map((ticket, index) => (
        <li key={index}>
          {`${ticket} - ${tickets[ticket]['qty']}x R$ ${
            tickets[ticket]['price']
          }`}
        </li>
      ))}
      <p>{getTotal(tickets)}</p>
    </Fragment>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Cart);
