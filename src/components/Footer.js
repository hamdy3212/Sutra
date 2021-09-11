import React from "react";
import "../style/footer.css";
const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col d-flex justify-content-center my-4 pt-1">
            <i className="fa fa-facebook-square"></i>
            <i className="fa fa-instagram instagram" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        © 2021 Copyright:
        <a href="/"> Sutra</a>
      </div>
    </footer>
  );
};

export default footer;
