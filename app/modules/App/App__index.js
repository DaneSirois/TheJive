import React, {Component} from 'react';

import Chatroom__index from '../Chatroom/Chatroom__index.js';
import App__container__navbar from './App__container__navbar.js';


class App__index extends Component {
  render() {
    return (
      <div className="App__module">
        <App__container__navbar />
        <Chatroom__index />
      </div>
    );
  };
};

export default App__index;
