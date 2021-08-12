import React from "react";
import CartItem from "./CartItem";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <ul className={classes["cart-items"]}>
      <CartItem />
    </ul>
  );
};

export default CartItems;
