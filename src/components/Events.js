import React from 'react';
import PropTypes from 'prop-types';
import Offer from './Offer';
import Address from './Address';

const Events = ({ address, name, ticket_offers }) => (
  <div className="Events">
    <div className="Events__Info">
      <h1 className="Events__Info__Name">{name}</h1>
      <Address {...address} />
    </div>

    {ticket_offers.nodes.map(offer => (
      <Offer key={offer.id} {...offer} />
    ))}
  </div>
);

Events.propTypes = {
  address: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  ticket_offers: PropTypes.instanceOf(Object).isRequired,
};

export default Events;
