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
      return newState || state;

    default:
      return state;
  }
};

export default Cart;
