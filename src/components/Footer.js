import React from "react";
import "../style/footer.css";
const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col d-flex justify-content-center my-4 pt-1">
            <a
              href="https://www.facebook.com/Sutra-100889875163890"
              target="_blank"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/sutra4080/" target="_blank">
              <i className="fa fa-instagram instagram" aria-hidden="true"></i>
            </a>
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
