const initialState = { tickets: {} };

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CART':
      return { ...state, tickets: { ...state.tickets, ...payload } };

    default:
      return state;
  }
};

export default Cart;
