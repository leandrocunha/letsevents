const initialState = { tickets: {} };

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CART':
      // return { ...state, tickets: { ...state.tickets, ...payload } };
      return {
        ...state,
        tickets: {
          ...state.tickets,
          [String(payload.ticket)]: {
            ...state.tickets[String(payload.ticket)],
            [String(payload.batch)]: {
              qty: payload.qty,
              price: payload.price,
              fees: payload.fees,
            },
          },
        },
      };

    case 'CART/CLEAR':
      let newState = null;

      // if (Object.keys(state.tickets).length) {
      //   const newState = { ...state };
      //   console.log(
      //     delete newState.tickets[payload.ticket][payload.batch],
      //     payload.ticket,
      //     payload.batch
      //   );
      // }
      return newState || state;

    default:
      return state;
  }
};

export default Cart;
