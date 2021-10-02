import Container from "react-bootstrap/Container";
import Products from "./Products";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MessengerCustomerChat from "react-messenger-customer-chat";

import "../style/home.css";
const Home = ({ user }) => {
  return (
    <div id="page-container">
      <Navbar user={user} />
      <Container style={{ marginBottom: "50px", marginTop: "50px" }}>
        <div className="product-container">
          <Products user={user} />
        </div>
        <MessengerCustomerChat
          pageId="100889875163890"
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
