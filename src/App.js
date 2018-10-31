import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import CuriosityPhotos from './NasaPhotos/Curiosity'


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
  handleLogin = (username) => {
    this.setState({
      username: username,
      logged: true
    })
  }
  render() {
    return (
      <div className="App">
        <h1>NASA Photos Login</h1><br/>
        {this.state.logged ? <CuriosityPhotos username={this.state.username}/> : <Login handleLogin={this.handleLogin}/>} 
      </div>
    );
  }
}

export default App;
