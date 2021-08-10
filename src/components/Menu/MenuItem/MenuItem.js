import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = ({ thumbnail, title, description, price, alt }) => {
  const formatedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <img src={thumbnail} alt={alt} />
        <div className={classes.summary}>
          <h4 className={classes.title}>{title}</h4>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
      <span className={classes.price}>{formatedPrice}</span>
    </li>
  );
};

export default MenuItem;
