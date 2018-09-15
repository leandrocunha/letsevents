import React from 'react';
import Batch from './Batch';

const Offers = props => (
  <div>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    {props.batches.map(batch => (
      <Batch key={batch.key} {...batch} />
    ))}
  </div>
);

export default Offers;
