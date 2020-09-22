import React, { Component } from "react";
import List from './components/List'
import employees from './utils/employees.json'
import './App.css';

class App extends Component {
  state = {
    employees
  }

  // sortEmployees = (role) => {
  //   const sortEmployee;
  // }

  render() {
    return (
      <List employees={employees} />
    );
  }
}
export default App;
