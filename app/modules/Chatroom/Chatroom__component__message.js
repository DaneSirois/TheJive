import React, {Component} from 'react';

class Chatroom__component__message extends Component {
  render() {
    return (
      <div className="message">
        <span className="username">{this.props.messageData.username}</span>
        <span className="content">{this.props.messageData.content}</span>
      </div>
    );
  };
};


export default Chatroom__component__message;
