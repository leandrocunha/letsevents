import React from 'react';

const Address = ({ name, street, city, country }) => (
  <div className="Address">
    <h2 className="Address__Establishment">{name}</h2>
    <p className="Address__Street">{`${street} - ${city} - ${country}`}</p>
  </div>
);

export default Address;
