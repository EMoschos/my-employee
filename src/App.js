import React, { Component } from "react";
import List from './components/List'
import Wrapper from './components/Container'
import SearchBar from './components/SearchBar'
import employees from './utils/employees.json'
import './App.css';

class App extends Component {
  state = {
    employees: employees,
    search: ''
  }

  searchName = query => {
    let arrEmployees = this.state.employees
    arrEmployees = arrEmployees.find(res => res.name === query)
    console.log(arrEmployees)
    if (!arrEmployees) {
      alert("No Match");
      return
    } else {
      this.setState({ employees: [arrEmployees] })
    }
  };

  sort = query => {
    let arrEmployees = this.state.employees
    console.log("Sorting")
    console.log(query)
    if (query === "Work Location") {
      arrEmployees = arrEmployees.sort(function (a, b) {
        console.log("in sort query1")
        let nameA = a.location.toLowerCase(), nameB = b.location.toLowerCase()
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      console.log("in sort query2")
      console.log(arrEmployees)
      this.setState({ employees: arrEmployees})
    } 
    
    if (query === "Role") {
      arrEmployees = arrEmployees.sort(function (a, b) {
        console.log("in sort query1")
        let nameA = a.occupation.toLowerCase(), nameB = b.occupation.toLowerCase()
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })

      console.log("in sort query3")
      console.log(arrEmployees)
      this.setState({ employees: arrEmployees})
    }

    if (query === "Name") {
      arrEmployees = arrEmployees.sort(function (a, b) {
        console.log("in sort query1")
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })

      console.log("in sort query3")
      console.log(arrEmployees)
      this.setState({ employees: arrEmployees})
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSortSelect = event => {
    event.preventDefault();
    console.log("Clicked")

    const value = event.target.textContent;
    console.log(value)
    this.sort(value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchName(this.state.search);
  };

  render() {
    return (
      <Wrapper>
        <SearchBar value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <List employees={this.state.employees} handleSortSelect={this.handleSortSelect} />
      </Wrapper>
    );
  }
}
export default App;
