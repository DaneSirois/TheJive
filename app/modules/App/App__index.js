import React, {Component} from 'react';

import Chatroom__index from '../Chatroom/Chatroom__index.js';

class App__index extends Component {

  componentWillMount() {
    this.socket = io();

    this.socket.on('data', this.store.dispatch);
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <div className="App__module">
        <Chatroom__index />
      </div>
    );
  };
};

export default App__index;
