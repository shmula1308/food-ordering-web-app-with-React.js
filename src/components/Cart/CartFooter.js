import React from "react";
import classes from "./CartFooter.module.css";

const CartFooter = (props) => {
  const formattedTotal = `$${props.total.toFixed(2)}`;
  return (
    <div className={classes["cart-footer"]}>
      <p className={classes.total}>
        <span>Total</span>
        <span>{formattedTotal}</span>
      </p>
    </div>
  );
};

export default CartFooter;
