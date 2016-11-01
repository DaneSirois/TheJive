import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

require("./styles/index.scss");

// Imports:
import root_reducer from './root_reducer.js';
import App__index from './modules/App/App__index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(<App__index />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(root_reducer)}>
    <App__index />
  </Provider>,
  document.getElementById('root')
);