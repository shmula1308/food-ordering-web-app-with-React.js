import React from "react";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartFooter from "./CartFooter";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <form>
      <div className={classes.cart}>
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
      <Button price={10}>Place Order</Button>
    </form>
  );
};

export default Cart;
