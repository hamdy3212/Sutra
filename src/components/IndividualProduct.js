import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fs } from "../Config/Config";

const IndividualProduct = ({ individualProduct, deleteProduct, user }) => {
  // deleting product function
  const handleDelete = () => {
    // deleteTodo(individualTodo.id);
    console.log("Hi");
  };
  return (
    <Card>
      <Card.Img variant="top" src={individualProduct.url} />
      <Card.Body>
        <Card.Title>{individualProduct.title}</Card.Title>
        <Card.Text>{individualProduct.description}</Card.Text>
        <Card.Text
          style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}
        >
          {individualProduct.price} EGP
        </Card.Text>

        {!user && (
          <Button variant="info" size="lg">
            Order Now
          </Button>
        )}
        {user && (
          <Button variant="danger" onClick={handleDelete}>
            DELETE
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default IndividualProduct;
