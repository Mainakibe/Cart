import React from 'react';
import { useGlobalContext } from './context';
import { AppProvider } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <AppProvider>
        <Navbar />
        <CartContainer />
      </AppProvider>
    </main>
  );
}

export default App;
