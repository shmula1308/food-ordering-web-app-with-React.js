import React from "react";
import classes from "./Navigation.module.css";
import { MdShoppingCart } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { useEffect, useState } from "react";

const Navigation = (props) => {
  const [opaque, setOpaque] = useState(false);

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
          <span className={`${classes.badge} ${classes.bounceIn}`}>13</span>
          <MdShoppingCart className={classes.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
