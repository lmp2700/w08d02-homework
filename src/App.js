import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'

// Create login functionality in which when you land on the app, you see a login component, 
// and then it switches, to your main container component after you are logged in.
// Inside of your main component you will render at least three properties from your API.
// Style your app with Bootstrap make it really nice looking.


class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      username: ''
    }
  }
  handleLogin = (username, isLoggedIn) => {
    this.setState({
      username: username,
      logged: isLoggedIn
    })
  }
  render() {
    return (
      <div className="App">
        <h1>NASA Photos Here</h1><br/>
        {this.state.logged ? <Login username={this.state}/> : <Login handleLogin={this.handleLogin}/>} 
      </div>
    );
  }
}

export default App;
