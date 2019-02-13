import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import AddPost from './components/addPost';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <AddPost></AddPost>
      </React.Fragment>
    );
  }
}

export default App;
