import React from 'react';
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

export default Events;
