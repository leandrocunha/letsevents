import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ name, street, city, country }) => (
  <div className="Address">
    <h2 className="Address__Establishment">{name}</h2>
    <p className="Address__Street">{`${street} - ${city} - ${country}`}</p>
  </div>
);

Address.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Address;
