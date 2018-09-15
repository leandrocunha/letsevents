import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Cart from './Cart';
import Events from './Events';

const getEventsQuery = gql`
  {
    event_offer(id: "lets-react-the-grand-tournament") {
      id
      name
      description
      photo {
        cover_url
      }
      address {
        name
        city
        state
        country
        street
      }
      ticket_offers {
        nodes {
          id
          name
          description
          batches {
            id
            number
            price
            purchaseable_quantities
            payment_methods {
              due_amount
              due_service_fee
              payment_type
            }
          }
        }
      }
    }
  }
`;
const App = () => (
  <Query query={getEventsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Fragment>
          <Events {...data.event_offer} />
          <Cart />
        </Fragment>
      );
    }}
  </Query>
);

export default App;
