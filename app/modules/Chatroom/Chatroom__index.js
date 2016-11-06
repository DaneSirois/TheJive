import React, {Component} from 'react';

import Chatroom__container__sidebar from './Chatroom__container__sidebar.js';
import Chatroom__container__messageList from './Chatroom__container__messageList.js';
import Chatroom__container__chatbar from './Chatroom__container__chatbar.js';

class Chatroom__index extends Component {
  render() {
    return (
      <div className="Chatroom">
        <Chatroom__container__sidebar />
        <Chatroom__container__messageList />
        <Chatroom__container__chatbar />
      </div>
    );
  };
};


export default Chatroom__index;
