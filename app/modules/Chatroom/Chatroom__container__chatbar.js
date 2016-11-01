import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// Actions:
// import Chatroom__action__submitMessage from './actions/Chatroom__action__submitMessage.js'

class Chatroom__container__chatbar extends Component {
  render() {
    return (
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)" />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  };
};

export default Chatroom__container__chatbar;

// function mapStateToProps (state) {
//   return ({

//   });
// };

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ submitMessage: Chatroom__action__submitMessage }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Chatroom__container__chatbar);