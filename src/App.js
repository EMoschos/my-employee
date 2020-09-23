import React, { Component } from "react";
import List from './components/List'
import Wrapper from './components/Container'
import SearchBar from './components/SearchBar'
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
      <Wrapper>
        <SearchBar />
        <List employees={employees} />
      </Wrapper>
    );
  }
}
export default App;
