import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';
import Fee from './Fee';

const CartItem = ({ paymentMethod, fee, price, qty, batch }) => (
  <div className="CartItem">
    <p className="CartItem__Price">
      {`Lote ${batch}`}
      <br />
      <Currency value={price} />
      <br />
      {paymentMethod && <Fee due_service_fee={fee} />}
    </p>
    <p className="CartItem__Batch">{`x ${qty}`}</p>
    <p className="CartItem__Total">
      <Currency value={qty * (price + fee)} />
    </p>
  </div>
);

CartItem.defaultProps = {
  paymentMethod: null,
};

CartItem.propTypes = {
  paymentMethod: PropTypes.string,
  fee: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  batch: PropTypes.number.isRequired,
};

export default CartItem;
