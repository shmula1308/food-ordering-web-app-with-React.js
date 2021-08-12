import React from "react";
import classes from "./CartHeader.module.css";

const CartHeader = (props) => {
  return (
    <div className={classes["cart-header"]}>
      <div className={classes.group}>
        <span>Qty</span>
        <span>Item</span>
      </div>
      <div className={classes.group}>
        <span>Price</span>
      </div>
    </div>
  );
};

export default React.memo(CartHeader);
