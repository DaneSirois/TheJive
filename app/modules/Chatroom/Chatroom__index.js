import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <h1>Hello React :)</h1>
    );
  }
}
export default App;


<!DOCTYPE html>
<html>
<head>
  <title>Chatty</title>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">

</head>
<body>
<div class="wrapper">
  <nav>
    <h1>Chatty</h1>
  </nav>
  <div id="message-list">
    <div class="message">
      <span class="username">Anonymous1</span>
      <span class="content">I won't be impressed with technology until I can download food.</span>
    </div>
    <div class="message system">
      Anonymous1 changed their name to nomnom.
    </div>
  </div>
  <footer>
    <input id="username" type="text" placeholder="Your Name (Optional)" />
    <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
  </footer>
</div>
</body>
</html>