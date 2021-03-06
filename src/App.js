import React, { Component } from 'react';
import Navbar from './components/NavBar';
import List from './components/List';
import { fetchData } from './redux/actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {

    return (
      <div className='App'>
        <Navbar />
        <List type='mylist' />
        <List type='recommekndations' />
      </div>
    );
  }
}

export default connect()(App);