import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.control}>
      <label className={classes.label}>Quantity</label>
      <input
        className={classes.input}
        type='number'
        defaultValue='1'
        min='1'
        max='99'
        step='1'
        id={"amount_ " + props.id}
      />
    </div>
  );
};

export default Input;
