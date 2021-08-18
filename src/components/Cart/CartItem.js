import React, { Fragment } from "react";
// import CartItemExtras from "./CartItemExtras";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  if (props.category === "pizza") {
    const extraToppingsSmall = (
      <Fragment>
        <span className={classes["item-extra"]}>
          {props.toppings.corn && "Extra Toppings - S: Corn (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.olives && "Extra Toppings - S: Olives (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.mushrooms && "Extra Toppings - S: Mushrooms (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.mozzarella && "Extra Toppings - S: Mozzarella (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.ham && "Extra Toppings - S: Ham (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.salami && "Extra Toppings - S: Salami(+0.70)"}
        </span>
      </Fragment>
    );
    const extraToppingsLarge = (
      <Fragment>
        <span className={classes["item-extra"]}>
          {props.toppings.corn && "Extra Toppings - L: Corn (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.olives && "Extra Toppings - L: Olives (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.mushrooms && "Extra Toppings - L: Mushrooms (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.mozzarella && "Extra Toppings - L: Mozzarella (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.ham && "Extra Toppings - L: Ham (+0.70)"}
        </span>
        <span className={classes["item-extra"]}>
          {props.toppings.salami && "Extra Toppings - L: Salami(+0.70)"}
        </span>
      </Fragment>
    );

    return (
      <li className={classes["cart-item"]}>
        <div className={classes.group}>
          <span className={classes.amount}>{props.amount}x</span>
          <span className={classes.title}>{props.title}</span>
          <div className={classes["cart-item-extras"]}>
            <span className={classes["item-extra"]}>Size: Small</span>
            {props.size === "Small" ? extraToppingsSmall : extraToppingsLarge}
            <span className={classes["item-extra"]}>Crust: {props.crust}</span>
            <span className={classes["item-extra"]}>{props.instructions}</span>
          </div>
        </div>
        <div className={classes.group}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.remove}>x</span>
        </div>
      </li>
    );
  }
  if (props.category === "dessert") {
    return (
      <li className={classes["cart-item"]}>
        <div className={classes.group}>
          <span className={classes.amount}>{props.amount}x</span>
          <span className={classes.title}>{props.title}</span>
          <div className={classes["cart-item-extras"]}>
            <span className={classes["item-extra"]}>{props.instructions}</span>
          </div>
        </div>
        <div className={classes.group}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.remove}>x</span>
        </div>
      </li>
    );
  }
};

export default CartItem;
