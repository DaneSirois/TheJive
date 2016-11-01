import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions:
import Chatroom__action__setUsername from './actions/Chatroom__action__setUsername.js'

class Chatroom__container__chatbar extends Component {
  constructor (props) {
    super(props);
    this.setUsernameFunc = this.setUsernameFunc.bind(this);
  }
  setUsernameFunc(input) {
    this.props.setUsername(input.target.value);
  }
  render() {
    return (
      <footer>
        <span> Your username is: {this.props.username} </span>
        <input id="username" type="text" onChange={this.setUsernameFunc} placeholder="enter your username:" />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  };
};

function mapStateToProps (state) {
  return ({
    username: state.Chatroom.username
  });
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUsername: Chatroom__action__setUsername }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom__container__chatbar);
