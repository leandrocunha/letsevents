import React from 'react';
import Currency from './Currency';

const Fee = ({ due_service_fee }) => (
  <span className="Fee">
    {'+ '}
    <Currency value={due_service_fee} />
    {' de taxas'}
  </span>
);

export default Fee;
