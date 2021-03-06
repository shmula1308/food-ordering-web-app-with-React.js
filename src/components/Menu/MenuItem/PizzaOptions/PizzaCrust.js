import React from "react";
import classes from "./PizzaCrust.module.css";

const PizzaCrust = (props) => {
  return (
    <div className={classes["item-options"]}>
      <span className={classes.category}>Crust(required)</span>
      <div className={classes["options-container"]}>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='radio'
              name='crust'
              defaultChecked
              onChange={props.onSelectCrust.bind(null, "thick")}
            />
            <span className={classes.option}>Thick</span>
          </div>
          <span className={classes["option-price"]}></span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input type='radio' name='crust' onChange={props.onSelectCrust.bind(null, "crispy")} />
            <span className={classes.option}>Crispy</span>
          </div>
          <span className={classes["option-price"]}></span>
        </label>
      </div>
    </div>
  );
};

export default PizzaCrust;
