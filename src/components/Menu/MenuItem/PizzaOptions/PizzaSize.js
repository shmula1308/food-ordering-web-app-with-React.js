import React from "react";
import classes from "./PizzaSize.module.css";

const PizzaSize = (props) => {
  return (
    <div className={classes["item-options"]}>
      <span className={classes.category}>Size(required)</span>
      <div className={classes["options-container"]}>
        <label>
          <div className={classes["options-control"]}>
            <input type='radio' defaultChecked name='size' />
            <span className={classes.option}>Small</span>
          </div>
          <span className={classes["option-price"]}></span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input type='radio' name='size' />
            <span className={classes.option}>Large</span>
          </div>
          <span className={classes["option-price"]}>+2.00</span>
        </label>
      </div>
    </div>
  );
};

export default PizzaSize;
