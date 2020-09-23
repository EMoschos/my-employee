import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'

function SearchBar() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand >Employee Search Tools</Navbar.Brand>
            <Nav className="mr-auto">
                <NavDropdown title="Location" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Sydney</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Adelaide</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Melbourne</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Occupation" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">JS Dev</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">CSS Dev</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Name" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
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