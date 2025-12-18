import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import classes from "./Product.module.css";
import axios from "axios";

function Products() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);
  return (
    <>
      <section className={classes.products_container}>
        {results?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default Products;
