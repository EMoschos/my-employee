import React, { Component } from "react";
import List from './components/List'
import Wrapper from './components/Container'
import SearchBar from './components/SearchBar'
import employees from './utils/employees.json'
import './App.css';
import { Jumbotron, Container } from 'react-bootstrap'

class App extends Component {
  state = {
    employees: employees,
    search: '',
    sortName: true,
    sortLoc: true,
    sortOcc: true
  }

  searchName = query => {
    let arrEmployees = this.state.employees;
    arrEmployees = arrEmployees.find(res => res.name === query);
    console.log(arrEmployees);
    if (query === "") {
      console.log("No Query")
      this.setState({ employees: employees });
      this.setState({ search: "" })
      return;
    } else if (!arrEmployees) {
      this.setState({ search: "" })
      this.setState({ employees: employees });
      console.log(employees)
      console.log("No search")
      alert("No Match");
      return;
    } else {
      this.setState({ employees: [arrEmployees] });
    }
  };

  sort = query => {
    let arrEmployees = this.state.employees;
    console.log("Sorting");
    console.log(query);
    if (query === "Work Location") {
      arrEmployees = arrEmployees.sort(function (a, b) {
        console.log("in sort function-Loc");
        let nameA = a.location.toLowerCase(), nameB = b.location.toLowerCase();
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      });
      if (this.state.sortLoc === true) {
        this.setState({ sortLoc: false })
        this.setState({ employees: arrEmployees });
        console.log("in true sort LOC");
        return;
      }
      if (this.state.sortLoc === false) {
        arrEmployees = arrEmployees.reverse();
        this.setState({ sortLoc: true })
        this.setState({ employees: arrEmployees });
        console.log("in false sort LOC");
        return;
      }
      console.log("in sort query3-LOC");
      console.log(arrEmployees);
    }

    if (query === "Role") {
      arrEmployees = arrEmployees.sort(function (a, b) {
        console.log("in sort function-role")
        let nameA = a.occupation.toLowerCase(), nameB = b.occupation.toLowerCase()
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      if (this.state.sortOcc === true) {
        this.setState({ sortOcc: false })
        this.setState({ employees: arrEmployees });
        console.log("in true sort OCC");
        return;
      }
      if (this.state.sortOcc === false) {
        arrEmployees = arrEmployees.reverse();
        this.setState({ sortOcc: true })
        this.setState({ employees: arrEmployees });
        console.log("in false sort OCC");
        return;
      }
      console.log("in sort query2-OCC")
      console.log(arrEmployees)
    }

    if (query === "Name") {
      arrEmployees = arrEmployees.sort(function (a, b) {
        console.log("in sort function-name")
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      if (this.state.sortName === true) {
        this.setState({ sortName: false })
        this.setState({ employees: arrEmployees });
        console.log("in true sort NAME");
        return;
      }
      if (this.state.sortName === false) {
        arrEmployees = arrEmployees.reverse();
        this.setState({ sortName: true })
        this.setState({ employees: arrEmployees });
        console.log("in false sort NAME");
        return;
      }
      console.log("in sort query1-NAME")
      console.log(arrEmployees)
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
        <Jumbotron fluid>
          <Container>
            <h1>My-Employee</h1>
            <p>
              Use My-Employee to sort by clicking the heading or search by name in the "Search" bar.
            </p>
            <p>
              NOTE: The search name needs to be an exact match to show in the list and by clicking the heading a second time you can reverse order the sort.  You can also return the full list after a search by having a blank search input and clicking search
           </p>
          </Container>
        </Jumbotron>
        <SearchBar value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <List employees={this.state.employees} handleSortSelect={this.handleSortSelect} />
      </Wrapper>
    );
  }
}
export default App;
