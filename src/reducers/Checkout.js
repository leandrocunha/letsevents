const initialState = {};

const Checkout = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHECKOUT/PAYMENT_METHOD':
      return { ...state, payment_method: payload };

    default:
      return state;
  }
};

export default Checkout;
