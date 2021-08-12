import React from "react";
import classes from "./CartFooter.module.css";

const CartFooter = (props) => {
  return (
    <div className={classes["cart-footer"]}>
      <p className={classes.total}>
        <span>Total</span>
        <span>$23.43</span>
      </p>
    </div>
  );
};

export default CartFooter;
