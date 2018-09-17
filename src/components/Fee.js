import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

const Fee = ({ due_service_fee }) => (
  <span className="Fee">
    {'+ '}
    <Currency value={due_service_fee} />
    {' de taxas'}
  </span>
);

Fee.propTypes = {
  due_service_fee: PropTypes.number.isRequired,
};

export default Fee;
