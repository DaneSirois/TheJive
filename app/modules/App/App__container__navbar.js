import React, {Component} from 'react';
import {connect} from 'react-redux';

class Chatroom__container__navbar extends Component {
  constructor (props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
  }
  renderMessages() {
    const messagesList = this.props.messages;
    return messagesList.map((message, index) => {
      return (
        <Chatroom__component__message key={index} messageData={message} color={message.color} />
      ); 
    });
  }
  render() {
    return (
      <nav>
        <img src="/app/images/logo.png"></img>
        <span className="connectedUsers--text">Connected Users: {this.props.connectedUsers.length}</span>
      </nav>
    );
  };
};

function mapStateToProps(state) {
  return ({
    connectedUsers: state.User.connectedUsers
  });
};

export default connect(mapStateToProps)(Chatroom__container__navbar);