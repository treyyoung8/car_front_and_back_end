import React, { Component } from 'react';
import './App.css';
import Table from './Components/table.js';
import Header from './Components/header.js';
import Footer from './Components/Footer.js';

class App extends Component {
  state = {
    cars: []
  }

  componentDidMount(){
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(cars => this.setState({ cars }));
  }

  render() {
    return (
      <>
      <Header />
      <Table cars={this.state.cars} />
      <Footer />
      </>
    );
  }
}

export default App;
