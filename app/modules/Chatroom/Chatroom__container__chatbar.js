import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions:
import {addUser__action, updateUsername__action} from '../User/actions/index.js';
import {newMessage__action, buildMessage__action} from './actions/index.js';

class Chatroom__container__chatbar extends Component {
  render() {
    console.log(this.props.userObj);
    return (
      <footer>
        <span> Your username is: {this.props.userObj.username} </span>
        <form onSubmit={this.props.handleSubmit(this.props.connectedUsers, this.props.message)}>
          <input id="username" type="text" onChange={this.props.updateUsername} placeholder="Anonymous" />
          <input id="new-message" type="text" onChange={this.props.buildMessage} placeholder="Type a message.." value={this.props.message} />
          <button type="submit">Send</button>
        </form>
      </footer>
    );
  };
};

function mapStateToProps (state) {
  return ({
    connectedUsers: state.User.connectedUsers,
    userObj: state.User.userObj,
    message: state.Chatroom.builtMessage
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateUsername: (e) => dispatch(updateUsername__action(e.target.value)),
  buildMessage: (e) => dispatch(buildMessage__action(e.target.value)),
  handleSubmit: (connectedUsers, message) => (e) => {
    e.preventDefault();
    const currentUser = connectedUsers.find((user) => {
      return user.ourself === true;
    });
    console.log("USER IS:", currentUser);
    dispatch(newMessage__action(currentUser.username, message));
  }
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ 
//     setUsername__action: User__action__setUsername,
//     sendMessage__action: Chatroom__action__sendMessage
//   }, dispatch); 
// };

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom__container__chatbar);
