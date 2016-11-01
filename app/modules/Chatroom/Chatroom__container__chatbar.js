import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions:
import User__action__setUsername from '../../User/actions/User__action__setUsername.js';
import Chatroom__action__sendMessage from './actions/Chatroom__action__sendMessage.js';


class Chatroom__container__chatbar extends Component {
  constructor (props) {
    super(props);
    this.setUsernameFunc = this.setUsernameFunc.bind(this);
    this.sendMessageFunc = this.sendMessageFunc.bind(this);
  }
  setUsernameFunc(input) {
    this.props.action__setUsername(input.target.value);
  }
  sendMessageFunc(input) {
    const messageObj = {
      username: this.props.username,
      content: input.target.value
    };
    console.log(messageObj);
    this.props.action__sendMessage(messageObj);
  }
  render() {
    return (
      <footer>
        <span> Your username is: {this.props.username} </span>
        <form onSubmit={this.sendMessageFunc}>
          <input id="username" type="text" onChange={this.setUsernameFunc} placeholder="enter your username:" value={this.props.username} />
          <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
        </form>
      </footer>
    );
  };
};

function mapStateToProps (state) {
  return ({
    username: state.User.username
  });
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    action__setUsername: User__action__setUsername,
    action__sendMessage: Chatroom__action__sendMessage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom__container__chatbar);
