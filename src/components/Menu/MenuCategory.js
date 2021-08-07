import React from "react";
import classes from "./MenuCategory.module.css";

const MenuCategory = (props) => {
  return (
    <div className={classes.category}>
      <details>
        <summary className={classes.label}>{props.label}</summary>
        <div className={`${classes["main-image"]}`}>
          <img src={props.image} alt='Cherry-Cheesecake-with-Berry-Sauce' />
        </div>
        <ul>
          <li>
            <div className={classes.thumbnail}></div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </details>
    </div>
  );
};

export default MenuCategory;
