import React from 'react';
import Offer from './Offer';
import Address from './Address';

const Events = ({ address, name, ticket_offers }) => (
  <div>
    <h1>{name}</h1>
    <Address {...address} />

    {ticket_offers.nodes.map(offer => (
      <Offer key={offer.id} {...offer} />
    ))}
  </div>
);

export default Events;
