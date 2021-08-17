import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import CartContext from "../../store/cart-context";
import { MdShoppingCart } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { useEffect, useState } from "react";

const Navigation = (props) => {
  const [opaque, setOpaque] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfItemsInCart = cartCtx.items.length;
  console.log(cartCtx.items);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOpaque(window.pageYOffset > 200);
    });
  }, []);

  return (
    <nav className={`${classes.nav} ${opaque ? classes.opaque : ""}`}>
      <h1>Pizzeria Napoli</h1>
      <div className={classes.actions}>
        <button className={classes.button}>
          <MdRestaurantMenu className={classes.icon} />
        </button>
        <button className={classes.button}>
          <span className={`${classes.badge} ${classes.bounceIn}`}>{numberOfItemsInCart}</span>
          <MdShoppingCart className={classes.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
