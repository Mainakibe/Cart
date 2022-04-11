import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const defaultState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const increaseItems = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decreaseItems = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };
  const clearItems = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  useEffect(() => {
    dispatch({ type: 'ITEM_TOTALS' });
  }, [state.cart]);

  const getData = async () => {
    dispatch({ type: 'LOADING' });
    const res = await fetch(url);
    const cart = await res.json();

    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_CART', payload: { id, type } });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseItems,
        decreaseItems,
        removeItem,
        clearItems,
        toggleAmount,
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
