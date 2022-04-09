const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CART':
      let cartToggle = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === 'increase') {
              return { ...cartItem, amount: cartItem.amount + 1 };
            } else if (action.payload.type === 'decrease') {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return {
        ...state,
        cartToggle,
      };

    case 'TOTALS':
        
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload.id),
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};
