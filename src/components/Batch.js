import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

const Batch = ({
  price,
  available,
  onChange,
  payment_methods,
  purchaseable_quantities,
  number,
}) => (
  <div className="Batch Batch--available">
    <p>{price ? <Currency value={price} /> : 'Grátis'}</p>
    <div className="Batch__SelectWrapper">
      {available ? (
        <select
          className="Select"
          defaultValue={!available}
          disabled={!available}
          onChange={({ target }) =>
            onChange(
              Number(target.value),
              price,
              payment_methods,
              purchaseable_quantities[
                purchaseable_quantities.length - 1
              ],
              number
            )
          }
        >
          <option> - </option>
          {purchaseable_quantities.map(qty => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      ) : (
        <p className="Batch__SelectWrapper__AvailableAt">
          Indisponível até o momento.
        </p>
      )}
    </div>
  </div>
);

Batch.propTypes = {
  available: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  payment_methods: PropTypes.instanceOf(Array).isRequired,
  purchaseable_quantities: PropTypes.instanceOf(Array).isRequired,
  number: PropTypes.number.isRequired,
};

export default Batch;
