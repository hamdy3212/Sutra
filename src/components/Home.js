import Container from "react-bootstrap/Container";
import Products from "./Products";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "../style/home.css";
const Home = ({ user }) => {
  return (
    <div id="page-container">
      <Navbar user={user} />
      <Container style={{ marginBottom: "50px", marginTop: "50px" }}>
        <div className="product-container">
          <Products user={user} />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
