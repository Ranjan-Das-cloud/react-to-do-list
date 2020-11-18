import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import App from './app';

import './style.css';

//let element = React.createElement('div',null,'Hello World');

/*let element = React.createElement(
    'div',
    null,
    React.createElement('h1',
    null,
    React.createElement('span',null,'Hello World')
    )
    );*/

    // Using JSX we can solve the problem of writing multiple times the same React.createElement()

    //let element = <div><h1><span>Hello World</span></h1></div>;

    // Behind the scenes JSX performs operations of building React Component by creating Virtual DOMs and pushing them into the React DOM internally each and every time when it collides wwith each and every HTML tags.

ReactDOM.render(<App/>,document.querySelector('#root'));
//ReactDOM.render(<App/>,document.getElementById("root"));






