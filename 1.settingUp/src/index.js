// import react and ReactDom libraries

import React from 'react';
import ReactDom from 'react-dom';

// create a react component

const App = () => {
    return <div>Hi there</div>
}

// take the react component and show on screen

ReactDom.render(
    <App></App>,document.querySelector('#root')
)