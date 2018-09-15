import React, { Fragment } from 'react';

const format = value =>
  value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });

const Currency = ({ value }) => {
  return <Fragment>{format(value)}</Fragment>;
};

export default Currency;
