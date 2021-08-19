import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartFooter from "./CartFooter";
import Button from "../UI/Button";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartItemsTotalPrice = cartCtx.items.reduce((a, b) => a + Number(b.price), 0);
  console.log(cartCtx.items);
  const onSubmitOrderHandler = (ev) => {
    ev.preventDefault();
    alert("Your order has been placed!");
  };

  return (
    <form onSubmit={onSubmitOrderHandler}>
      <div>
        <CartHeader />
        <CartItems />
        <CartFooter total={cartItemsTotalPrice} />
      </div>
      <Button price={cartItemsTotalPrice}>Place Order</Button>
    </form>
  );
};

export default Cart;
