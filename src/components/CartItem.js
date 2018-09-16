import React from 'react';
import Currency from './Currency';
import Fee from './Fee';

const CartItem = ({ paymentMethod, fee, price, qty, batch }) => (
  <div className="CartItem">
    <p className="CartItem__Price">
      Lote {batch}
      <br />
      <Currency value={price} />
      <br />
      {paymentMethod && <Fee due_service_fee={fee} />}
    </p>
    <p className="CartItem__Batch">x {qty}</p>
    <p className="CartItem__Total">
      <Currency value={qty * (price + fee)} />
    </p>
    {/* <span>
      <strong>{`${name} (x${quantity})`}</strong>
      <br />
      <Currency value={price} />
      {checkout.payment_method && <Fee due_service_fee={fee} />}
    </span>
    <span>
      <Currency value={quantity * (price + fee)} />
    </span> */}
  </div>
);

export default CartItem;
