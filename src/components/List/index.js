import React from "react";
import { Table, Image } from 'react-bootstrap'
import "./style.css";

function List(props) {
 
  const employee = props.employees

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>Name</th>
          <th>Role</th>
          <th>Work Location</th>
        </tr>
      </thead>
      <tbody>
        {employee.map(item => (
          <tr key={item.id}>
            <td><Image alt={item.name} src={item.image} roundedCircle fluid/></td>
            <td>{item.name}</td>
            <td>{item.occupation}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>

  );
}

export default List;