import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

require("./styles/index.scss");

// Imports:
import root_reducer from './root_reducer.js';
import App__index from './modules/App/App__index.js';

// const logger = ({getState}) => next => action => {
//   console.log(`Old State: ${getState()}`);
//   console.log(`Action: ${action}`);
//   const newState = next(action);
//   console.log(`New State: ${newState}`);
//   return newState;
// }

// const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

// ReactDOM.render(<App__index />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={createStore(root_reducer/*, applyMiddleware(logger)*/)}>
    <App__index />
  </Provider>,
  document.getElementById('root')
);