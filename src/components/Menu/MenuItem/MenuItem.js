import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = ({ thumbnail, title, description, price, alt, id, onShow }) => {
  const formatedPrice = `$${price.toFixed(2)}`;

  // const clickHandler = (id) => {
  //   console.log("hi", id);
  // };

  return (
    <li className={classes.item} onClick={onShow.bind(null, id)}>
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
