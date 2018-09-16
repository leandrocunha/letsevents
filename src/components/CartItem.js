import React from 'react';
import Currency from './Currency';
import Fee from './Fee';

const CartItem = ({ checkout, fee, name, price, quantity }) => (
  <li className="Cart__ItemsList__Item" key={name}>
    <span>
      <strong>{`${name} (x${quantity})`}</strong>
      <br />
      <Currency value={price} />
      {checkout.payment_method && <Fee due_service_fee={fee} />}
    </span>
    <span>
      <Currency value={quantity * (price + fee)} />
    </span>
  </li>
);

export default CartItem;
