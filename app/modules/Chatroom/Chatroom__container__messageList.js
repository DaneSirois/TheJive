import React, {Component} from 'react';
// import {connect} from 'react-redux';

// Import components:
import Chatroom__component__message from './Chatroom__component__message.js'; 

class Chatroom__container__messageList extends Component {
  render() {
    return (
      <div id="message-list">
        <Chatroom__component__message />
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </div>
    );
  };
};

export default Chatroom__container__messageList;

// function mapStateToProps(state) {
//   return ({
//     messages: state.Chatroom.messages,
//   });
// };

// export default connect(mapStateToProps)(Chatroom__container__messageList);
