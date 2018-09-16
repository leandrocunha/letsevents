const initialState = { tickets: {} };

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CART':
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
      if (Object.keys(state.tickets).length) {
        if (state.tickets[payload.ticket]) {
          delete state.tickets[payload.ticket][payload.batch];
        }
      }

      return { ...state };

    default:
      return state;
  }
};

export default Cart;
