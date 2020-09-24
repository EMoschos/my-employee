import React from "react";
import { Navbar, Form, Button, FormControl } from 'react-bootstrap'
import "./style.css";

function SearchBar(props) {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand >My Employee</Navbar.Brand>
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