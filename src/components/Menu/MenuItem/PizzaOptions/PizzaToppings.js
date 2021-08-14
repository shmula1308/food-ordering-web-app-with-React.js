import React from "react";
import classes from "./PizzaToppings.module.css";

const PizzaToppings = (props) => {
  return (
    <div className={classes["item-options"]}>
      <span className={classes.category}>Extra Toppings</span>
      <div className={classes["options-container"]}>
        <label>
          <div className={classes["options-control"]}>
            <input type='checkbox' />
            <span className={classes.option}>Corn</span>
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
            <span className={classes.option}>Mozzarella</span>
          </div>
          <span className={classes["option-price"]}>$1.20</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input type='checkbox' />
            <span className={classes.option}>Mushrooms</span>
          </div>
          <span className={classes["option-price"]}>$1.20</span>
        </label>
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
            <span className={classes.option}>Salami</span>
          </div>
          <span className={classes["option-price"]}>$1.20</span>
        </label>
      </div>
    </div>
  );
};

export default PizzaToppings;
