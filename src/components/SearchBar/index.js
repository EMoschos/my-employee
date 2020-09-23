import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import "./style.css";

function SearchBar(props) {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand >Employee Search/Filter Tools</Navbar.Brand>
            <Nav className="mr-auto">
                <NavDropdown 
                title="Location" 
                name="sort" 
                value={props.value} 
                onChange={props.handleInputChange} 
                onClick={props.handleSortSelect}
                id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Sydney</NavDropdown.Item>
                    <NavDropdown.Item href="#">Adelaide</NavDropdown.Item>
                    <NavDropdown.Item href="#">Melbourne</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Occupation" name="sort"id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">JS Dev</NavDropdown.Item>
                    <NavDropdown.Item href="#">CSS Dev</NavDropdown.Item>
                    <NavDropdown.Item href="#">Something Else</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Name"
                    className="mr-sm-2"
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search" />
                <Button 
                variant="outline-primary" 
                onClick={props.handleFormSubmit}>Search</Button>
            </Form>
        </Navbar>

    );
}

export default SearchBar;

// {/* <form>
//     <div className="form-group">
//         <label htmlFor="search">Search:</label>
//         <input
//             onChange={props.handleInputChange}
//             value={props.value}
//             name="search"
//             type="text"
//             className="form-control"
//             placeholder="Search For a Movie"
//             id="search"
//         />
//         <br />
//         <button onClick={props.handleFormSubmit} className="btn btn-primary">
//             Search
//   </button>
//     </div>
// </form> */}