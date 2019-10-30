import React, { Component } from 'react';

import Login from './components/auth/Login';
import Myhome from './components/privatePages/MyHome';

class App extends Component {

  render() {
    const currentUser = localStorage.getItem('currentUser');
    return (
      <div className="App">
        {currentUser ? <Myhome /> : <Login />}
      </div>
    );
  }
}

export default App;