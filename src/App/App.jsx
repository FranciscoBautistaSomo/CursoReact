import React from 'react';

import './App.css';

import WishInput from './WishInput';
import WishList from './WishList';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Make an intro course to React', done: true },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gymia guevosm', done: false },
];

function App() {
  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput />
      <WishList wishes={wishes} />

      <button type="button" className="wish-clear">Archive done</button>
    </div>
  );
}

export default App;
