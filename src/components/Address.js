import React from 'react';

const Address = props => (
  <div className="Address">
    <h2 className="Address__Establishment">{props.name}</h2>
    <p className="Address__Street">{`${props.street} - ${
      props.city
    } - ${props.country}`}</p>
  </div>
);

export default Address;
