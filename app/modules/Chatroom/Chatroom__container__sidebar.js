import React, {Component} from 'react';
import {connect} from 'react-redux';

// Import components:
import Chatroom__component__avatar from './Chatroom__component__avatar.js'; 

class Chatroom__container__sidebar extends Component {
  constructor (props) {
    super(props);
    this.renderAvatars = this.renderAvatars.bind(this);
  }
  renderAvatars() {
    const connectedUsers = this.props.connectedUsers;
    return connectedUsers.map((user, index) => {
      return (
        <Chatroom__component__avatar key={index} avatar={user.avatar} />
      );
    });
  }
  render() {
    return (
      <div id="Chatroom__sidebar">
        {this.renderAvatars()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    connectedUsers: state.User.connectedUsers
  });
};

export default connect(mapStateToProps)(Chatroom__container__sidebar);
