import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions:
import {addUser__action, setUsername__action} from '../User/actions/index.js';
import {newMessage__action, buildMessage__action} from './actions/index.js';


class Chatroom__container__chatbar extends Component {
  render() {
    return (
      <footer>
        <span> Your username is: {this.props.username} </span>
        <form onSubmit={this.props.newMessage(this.props.username, this.props.message)}>
          <input id="username" type="text" onChange={this.props.setUsername} placeholder="Enter a username:" value={this.props.username} />
          <input id="new-message" type="text" onChange={this.props.buildMessage} placeholder="Type a message.." value={this.props.message} />
          <button type="submit">Send</button>
        </form>
      </footer>
    );
  };
};

function mapStateToProps (state) {
  return ({
    username: state.User.username,
    message: state.Chatroom.builtMessage
  });
};

const mapDispatchToProps = dispatch => ({
  setUsername: (e) => dispatch(setUsername__action(e.target.value)),
  buildMessage:  (e) => dispatch(buildMessage__action(e.target.value)),
  newMessage: (username, message) => (e) => {
    e.preventDefault();
    dispatch(addUser__action(username));
    dispatch(newMessage__action(username, message));
  }
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ 
//     setUsername__action: User__action__setUsername,
//     sendMessage__action: Chatroom__action__sendMessage
//   }, dispatch);
// };

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom__container__chatbar);
