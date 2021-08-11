import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} type={props.type}>
      <div className={classes["button-content"]}>
        <div className={classes["item-total"]}>$5.00</div>
        <div className={classes.separator}></div>
        <div className={classes["button-text"]}>{props.children}</div>
      </div>
    </button>
  );
};

export default Button;
