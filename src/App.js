import React, { Component } from "react";
import List from './components/List'
import Wrapper from './components/Container'
import SearchBar from './components/SearchBar'
import employees from './utils/employees.json'
import './App.css';

class App extends Component {
  state = {
    employees: employees,
    search: '',
    sort: ''
  }

  searchName = query => {
    let arrEmployees = this.state.employees
    arrEmployees = arrEmployees.find(res => res.name === query)
    console.log(arrEmployees)
    if (!arrEmployees){
      alert("No Match");
      return
   } else {
     this.setState({employees: [arrEmployees]})
    }
   
  };

  sort = query => {
    let arrEmployees = this.state.employees
    arrEmployees = arrEmployees.filter(res => res.location === query)
    console.log(arrEmployees)
    this.setState({employees: [arrEmployees]})
    
    
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
    this.sort(this.state.sort);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchName(this.state.search);
  };

  // sortEmployees = (role) => {
  //   const sortEmployee;
  // }

  render() {
    return (
      <Wrapper>
        <SearchBar value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}/>
        <List employees={this.state.employees} />
      </Wrapper>
    );
  }
}
export default App;
