import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import CartContext from "../../store/cart-context";
import { MdShoppingCart } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { useEffect, useState } from "react";

const Navigation = (props) => {
  const [opaque, setOpaque] = useState(false);
  const [isCartIconHighlighted, setIsCartIconHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfItemsInCart = items.reduce((a, b) => a + Number(b.amount), 0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOpaque(window.pageYOffset > 200);
    });
  }, []);

  useEffect(() => {
    setIsCartIconHighlighted(true);
    let timmy = setTimeout(() => {
      setIsCartIconHighlighted(false);
    }, 300);
    return () => {
      clearInterval(timmy);
    };
  }, [items]);

  return (
    <nav className={`${classes.nav} ${opaque ? classes.opaque : ""}`}>
      <h1>Pizzeria Napoli</h1>
      <div className={classes.actions}>
        <button className={classes.button}>
          <MdRestaurantMenu className={classes.icon} />
        </button>
        <button className={classes.button} onClick={props.showCart}>
          <span className={`${classes.badge} ${isCartIconHighlighted ? classes.bounceIn : ""}`}>
            {numberOfItemsInCart}
          </span>
          <MdShoppingCart className={classes.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
