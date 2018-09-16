import React from 'react';
import Currency from './Currency';

const Batch = props => (
  <div className="Batch Batch--available">
    <p>{props.price ? <Currency value={props.price} /> : 'Grátis'}</p>
    <div className="Batch__SelectWrapper">
      <select
        className="Select"
        disabled={!props.available}
        onChange={({ target }) =>
          props.onChange(target.value, props.price)
        }
      >
        <option> - </option>
        {props.purchaseable_quantities.map(qty => (
          <option key={qty}>{qty}</option>
        ))}
      </select>
    </div>
  </div>
);

export default Batch;
