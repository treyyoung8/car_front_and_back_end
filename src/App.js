import React, { Component } from 'react';
import './App.css';
import Table from '/Users/treyyoung/playground/car_front_end_project/car_front_end/src/Components/table.js'

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
      <Table cars={this.state.cars} />
      </>
    );
  }
}

export default App;
