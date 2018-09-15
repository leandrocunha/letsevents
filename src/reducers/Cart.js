const initialState = {};

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CART':
      return { cart: payload };

    default:
      return state;
  }
};

export default Cart;
