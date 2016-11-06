import React, {Component} from 'react';
import {connect} from 'react-redux';

// Import components:
import Chatroom__component__message from './Chatroom__component__message.js'; 

class Chatroom__container__messageList extends Component {
  constructor (props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
  }
  renderMessages() {
    const messagesList = this.props.messages;
    return messagesList.map((message, index) => {
      if (message.username === "SYSTEM") {
        message.avatar = "/app/images/mod_avatar.png";
        console.log(message);
        return (
          <Chatroom__component__message key={index} messageData={message} color={"#efefef"} />
        )
      } else {
        return (
          <Chatroom__component__message key={index} messageData={message} color={message.color} />
        );
      } 
    });
  }
  render() {
    console.log(this.props.messages);
    return (
      <div id="message-list">
        {this.renderMessages()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    messages: state.Chatroom.messages
  });
};

export default connect(mapStateToProps)(Chatroom__container__messageList);
