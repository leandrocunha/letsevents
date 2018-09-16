import React from 'react';
import Currency from './Currency';

const Batch = props => (
  <div className="Batch Batch--available">
    <p>{props.price ? <Currency value={props.price} /> : 'Grátis'}</p>
    <div className="Batch__SelectWrapper">
      {props.available ? (
        <select
          className="Select"
          defaultValue={!props.available}
          disabled={!props.available}
          onChange={({ target }) =>
            props.onChange(
              Number(target.value),
              props.price,
              props.payment_methods,
              props.purchaseable_quantities[
                props.purchaseable_quantities.length - 1
              ],
              props.number
            )
          }
        >
          <option> - </option>
          {props.purchaseable_quantities.map(qty => (
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

export default Batch;
