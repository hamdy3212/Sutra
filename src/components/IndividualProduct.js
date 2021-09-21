import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const IndividualProduct = ({ individualProduct, deleteProduct, user }) => {
  return (
    <Card>
      <Card.Img variant="top" src={individualProduct.url} />
      <Card.Body>
        <Card.Title>{individualProduct.category}</Card.Title>
        <Card.Text>Dimensions: {individualProduct.size}</Card.Text>
        <Card.Text>Material: {individualProduct.material}</Card.Text>
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
          <Button
            variant="danger"
            onClick={() => deleteProduct(individualProduct.ID)}
          >
            DELETE
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default IndividualProduct;
