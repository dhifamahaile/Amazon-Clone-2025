import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({ product, flex, renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  return (
    <div>
      <a href={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </a>
      <div>
        <h3>{title}</h3>
        {flex && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && <button className={classes.button}>add to Cart</button>}
      </div>
    </div>
  );
}

export default ProductCard;
