import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const format = value =>
  value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });

const Currency = ({ value }) => <Fragment>{format(value)}</Fragment>;

Currency.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Currency;
