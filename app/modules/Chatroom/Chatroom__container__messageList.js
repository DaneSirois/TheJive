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
      return (
        <Chatroom__component__message key={index} messageData={message} color={message.color} />
      ); 
    });
  }
  render() {
    return (
      <div id="message-list">
        {this.renderMessages()}
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
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
