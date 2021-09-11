import React, { useState, useEffect } from "react";
import IndividualProduct from "./IndividualProduct";

const Products = ({ products, deleteProduct, user }) => {
  const getData = () => {};
  const [displayedProducts, setDisplayedProducts] = useState([]);
  useEffect(() => {
    setDisplayedProducts(...displayedProducts, getData());
  }, []);

  return products.map((individualProduct) => {
    return (
      <IndividualProduct
        key={individualProduct.ID}
        individualProduct={individualProduct}
        user={user}
      />
    );
  });
};

export default Products;
