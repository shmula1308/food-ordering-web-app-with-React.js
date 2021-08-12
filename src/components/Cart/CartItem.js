import React from "react";
import CartItemExtras from "./CartItemExtras";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.group}>
        <span className={classes.amount}>1x</span>
        <span className={classes.title}>Ice cream</span>
        <CartItemExtras />
      </div>
      <div className={classes.group}>
        <span className={classes.price}>6.00</span>
        <span className={classes.remove}>x</span>
      </div>
    </li>
  );
};

export default CartItem;
