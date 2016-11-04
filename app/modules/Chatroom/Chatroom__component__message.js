import React, {Component} from 'react';

class Chatroom__component__message extends Component {
  render() {
    return (
      <div className="message" style={{color: this.props.color}} >
        <span className="username">{this.props.messageData.username}</span>
        <span className="content">{this.props.messageData.message}</span>
      </div>
    );
  };
};


export default Chatroom__component__message;
