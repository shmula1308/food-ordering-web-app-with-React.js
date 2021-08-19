import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          onClick={cartCtx.removeItem.bind(null, item.id)}
          title={item.title}
          amount={item.amount}
          price={item.price}
          size={item.size}
          toppings={item.pizzaToppings}
          crust={item.pizzaCrust}
          instructions={item.specialInstructions}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default CartItems;
