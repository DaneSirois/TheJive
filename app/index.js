import React, {Component} from 'react';

require("./styles/application.scss");

// Dependencies:
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import { createStore, applyMiddleware } from 'redux';

// Imports:
  import App__index from './modules/App/App__index.js';
  import root_reducer from './root_reducer.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(root_reducer)}>
    <App__index />
  </Provider>,
  document.getElementById('root')
);
