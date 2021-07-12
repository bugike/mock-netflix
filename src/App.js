import React, { Component } from 'react';
import Navbar from './components/NavBar';
import List from './components/List';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Navbar />
        <List type='mylist' />
        <List type='recommendations' />
      </div>
    );
  }
} 



export default App;
