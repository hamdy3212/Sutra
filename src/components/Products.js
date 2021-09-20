import React, { useState, useEffect } from "react";
import IndividualProduct from "./IndividualProduct";
import { auth, fs } from "../Config/Config";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Products = ({ user }) => {
  // state of products
  const [products, setProducts] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [deleteById, setDeleteById] = useState();
  const passIdToDelete = (id) => {
    setShow(true);
    setDeleteById(id);
  };
  const DeleteModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const deleteProduct = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // remove from database
        fs.collection("/Products").doc(deleteById).delete();
        // remove from UI
        const productsAfterDelete = products.filter(
          (product) => product.ID !== deleteById
        );
        setProducts(productsAfterDelete);
        setShow(false);
      } else {
        console.log("user is not signed in to delete todos");
      }
    });
  };
  // getting products function
  const getProducts = async () => {
    const products = await fs.collection("Products").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  if (products.length < 1) {
    return <div className="container-fluid">Please wait....</div>;
  } else {
    return (
      <>
        {products.map((individualProduct) => {
          return (
            <IndividualProduct
              key={individualProduct.ID}
              individualProduct={individualProduct}
              user={user}
              deleteProduct={passIdToDelete}
            />
          );
        })}
        <DeleteModal />
      </>
    );
  }
};

export default Products;
