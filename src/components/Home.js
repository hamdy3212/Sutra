import React, { useState, useEffect } from "react";
import { auth, fs } from "../Config/Config";
import Container from "react-bootstrap/Container";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import "../style/home.css";
const Home = (deleteProduct) => {
  // getting current user uid
  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }
  /* eslint-disable no-unused-vars */
  const uid = GetUserUid();
  /* eslint-disable no-unused-vars */

  // getting current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();
  // state of products
  const [products, setProducts] = useState([]);

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

  let Product;
  return (
    <div id="page-container">
      <Navbar user={user} />
      <Container style={{ marginBottom: "50px" }}>
        <h1 className="h1-title">Products</h1>
        {products.length > 0 && (
          <div className="product-container">
            <Products products={products} user={user} />
          </div>
        )}
        {products.length < 1 && (
          <div className="container-fluid">Please wait....</div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
