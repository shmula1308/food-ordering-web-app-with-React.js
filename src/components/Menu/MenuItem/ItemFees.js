import React from "react";
import classes from "./ItemFees.module.css";

const ItemFees = (props) => {
  return (
    <div className={classes["item-options"]}>
      <span className={classes.category}>Fees(required)</span>
      <div className={classes["options-container"]}>
        <label>
          <div className={classes["options-control"]}>
            <input type='checkbox' defaultChecked />
            <span className={classes.option}>Environmental fee</span>
          </div>
          <span className={classes["option-price"]}>+0.08</span>
        </label>
      </div>
    </div>
  );
};

export default ItemFees;
