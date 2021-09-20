import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { storage, fs } from "../Config/Config";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const history = useHistory();
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [category, setCategory] = useState("Scarf");
  const [price, setPrice] = useState("");
  const [imageError, setImageError] = useState("");
  const [image, setImage] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");
  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError("");
      } else {
        setImage(null);
        setImageError("please select a valid image file type (png or jpg)");
      }
    } else {
      setImageError("please select your file");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (size && material && category && price && image) {
      const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          /* eslint-disable no-unused-vars */
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          /* eslint-disable no-unused-vars */
        },
        (error) => setUploadError(error.message),
        () => {
          storage
            .ref("product-images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              fs.collection("Products")
                .add({
                  category,
                  size,
                  material,
                  price: Number(price),
                  url,
                })
                .then(() => {
                  setSuccessMsg("Product added successfully");
                  setSize("");
                  setMaterial("");
                  setPrice("");
                  document.getElementById("file").value = "";
                  setImageError("");
                  setUploadError("");
                  setTimeout(() => {
                    setSuccessMsg("");
                    history.push("/");
                  }, 0);
                })
                .catch((error) => setUploadError(error.message));
            });
        }
      );
    } else {
      setUploadError("Please fill all the data");
    }
  };

  return (
    <Container
      style={{
        width: "50%",
        border: "1px solid black ",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "50px",
        boxShadow: "5px 5px 10px grey, -5px -5px 10px grey",
      }}
    >
      {successMsg && (
        <>
          <div className="success-msg">{successMsg}</div>
          <br></br>
        </>
      )}
      <Form>
        <Form.Group controlId="Category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          >
            <option>Scarf</option>
            <option>Shemise</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Size">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="text"
            name="Size"
            placeholder="Size"
            onChange={(e) => setSize(e.target.value)}
            value={size}
            required
          />
        </Form.Group>
        <Form.Group controlId="Material">
          <Form.Label>Material</Form.Label>
          <Form.Control
            type="text"
            name="Material"
            placeholder="Material"
            onChange={(e) => setMaterial(e.target.value)}
            value={material}
            required
          />
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price (EGP)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </Form.Group>
        <Form.Group controlId="Image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="file"
            name="image"
            id="file"
            placeholder="Image URL"
            required
            onChange={handleProductImg}
          />
        </Form.Group>
        {imageError && (
          <>
            <br></br>
            <div className="error-msg">{imageError}</div>
          </>
        )}
        <Button
          className="mt-3"
          variant="success"
          size="lg"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Form>
      {uploadError && (
        <>
          <br></br>
          <div className="error-msg">{uploadError}</div>
        </>
      )}
    </Container>
  );
};

export default AddProduct;
