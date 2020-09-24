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
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
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