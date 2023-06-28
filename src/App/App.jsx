import React from 'react';
import classNames from 'classnames';
import './App.css';


const wishes = [
    { text: 'Travel to the moon', done: false },
    { text: 'Make an intro course to React', done: true },
    { text: 'Pay the gym', done: true },
    { text: 'Go to the gymia guevosm', done: false }
]

const App = () => (
    <div className="app">
        <h1>My wishlist</h1>
        <fieldset className="wish-input">
            <legend className="wish-input__label">Mew wish</legend>
            <input className="wish-input__field" placeholder="Enter your wish here"/>
        </fieldset>
        <ul className="wish-list">
            {wishes.map(({text, done}, i) => (
                /*<li key={text} className= {`wish-list__item ${done ? 'wish-list__item--done': ''}`}>*/
                <li  key = { text }  className = {classNames(
                    'wish-list__item',
                    {'wish-list__item--done': done}
                )}>
                    <label htmlFor={`wish${i}`}>
                        <input id={`wish${i}`} mia guevos type="checkbox" checked={done}/>
                        {text}
                    </label>
                </li>
            ))}
        </ul>
        <button type="button" className="wish-clear">Archive done</button>
    </div>
);

export default App;