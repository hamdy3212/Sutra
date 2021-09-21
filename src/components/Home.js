import React, { useState, useEffect } from "react";
import { auth, fs } from "../Config/Config";
import Container from "react-bootstrap/Container";
import Products from "./Products";
import Footer from "./Footer";
import "../style/home.css";
const Home = ({ user }) => {
  return (
    <div id="page-container">
      <Container style={{ marginBottom: "50px", marginTop: "50px" }}>
        {/* <h1 className="h1-title">Products</h1> */}
        <div className="product-container">
          <Products user={user} />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
