import React from 'react';

const Address = props => (
  <div className="Address">
    <h2>{props.name}</h2>
    <p>{props.street}</p>
    <p>{`${props.city} - ${props.country}`}</p>
  </div>
);

export default Address;
