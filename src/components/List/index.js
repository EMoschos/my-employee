import React from "react";
import { Table, Image } from 'react-bootstrap'
import "./style.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  // const notPurchased = props.groceries.filter(grocery => !grocery.purchased);
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

// {/* <ul className="list-group">
//   {employee.map(item => (
//     <li className="list-group-item" key={item.id}>
//       {item.name}
//     </li>
//   ))}
// </ul> */}

// {/* <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Cras justo odio</ListGroupItem>
//     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card> */}