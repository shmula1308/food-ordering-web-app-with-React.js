import React, { Fragment } from "react";
import classes from "./ItemOptions.module.css";

const ItemOptions = (props) => {
  return (
    <div className={classes["item-options"]}>
      <span className={classes.category}>Toppings</span>
      <div className={classes["options-container"]}>
        <label>
          <div className={classes["options-control"]}>
            <input type='checkbox' />
            <span className={classes.option}>Ham</span>
          </div>
          <span className={classes["option-price"]}>$1.20</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input type='checkbox' />
            <span className={classes.option}>Olives</span>
          </div>
          <span className={classes["option-price"]}>$1.20</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input type='checkbox' />
            <span className={classes.option}>Tomato</span>
          </div>
          <span className={classes["option-price"]}>$1.20</span>
        </label>
      </div>
    </div>
  );
};

export default ItemOptions;
