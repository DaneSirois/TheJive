import React, {Component} from 'react';

class Chatroom__component__avatar extends Component {
  render() {
    return (
      <div className="sidebar__avatar__container">
        <img src={this.props.avatar} /> 
      </div>
    );
  };
};


export default Chatroom__component__avatar;
