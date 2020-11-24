// import react and ReactDom libraries

import React from 'react';
import ReactDom from 'react-dom';

// create a react component

const App = () => {
const buttonName = "Click Me"

    return (
        <div>
            <label className="label" htmlFor="name">Enter Value:</label>
            <input id="name" type="text"></input>
    <button style={{ backgroundColor: '#444', color: 'white', width: '100%' }}>{buttonName}</button>
        </div>
    )
}

// take the react component and show on screen

ReactDom.render(
    <App></App>, document.querySelector('#root')
)