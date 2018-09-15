import React from 'react';

const Batch = props => (
  <div className="Batch Batch--available">
    <p>{props.price}</p>
    <select
      disabled={!props.available}
      onChange={({ target }) =>
        props.onChange(target.value, props.price)
      }
    >
      <option>Quantos deseja comprar?</option>
      {props.purchaseable_quantities.map(qty => (
        <option key={qty}>{qty}</option>
      ))}
    </select>
  </div>
);

export default Batch;
