import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);
  const [total, SetTotal] = useState();
  const [loading, setLoading] = useState(true);

  // const removeItem=()=>{}
  const increaseItems = () => {
    setCart(cart + 1);
  };
  const decreaseItems = () => {
    setCart(cart - 1);
  };
  const clearItems = () => {
    setCart([]);
  };
  // const total=()=>{}
  return (
    <AppContext.Provider
      value={{
        cart,
        increaseItems,
        decreaseItems,
        clearItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
