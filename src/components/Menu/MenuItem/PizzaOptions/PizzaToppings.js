import React, { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import classes from "./PizzaToppings.module.css";

const PizzaToppings = (props) => {
  const cartCtx = useContext(CartContext);

  const pizzaToppingsPrice = cartCtx.pizzaSize === "Small" ? "+0.70" : "+1.20";

  return (
    <div className={classes["item-options"]}>
      <span className={classes.category}>
        {cartCtx.pizzaSize === "small" ? "Extra Toppings - S" : " Extra Toppings - L"}
      </span>
      <div className={classes["options-container"]}>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsPrice}
              data-item='corn'
              checked={cartCtx.pizzaToppings.corn}
              onClick={props.onClick}
            />
            <span className={classes.option}>Corn</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsPrice}
              data-item='olives'
              checked={cartCtx.pizzaToppings.olives}
              onClick={props.onClick}
            />
            <span className={classes.option}>Olives</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsPrice}
              data-item='mozzarella'
              checked={cartCtx.pizzaToppings.mozzarella}
              onClick={props.onClick}
            />
            <span className={classes.option}>Mozzarella</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsPrice}
              data-item='mushrooms'
              checked={cartCtx.pizzaToppings.mushrooms}
              onClick={props.onClick}
            />
            <span className={classes.option}>Mushrooms</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsPrice}
              data-item='ham'
              checked={cartCtx.pizzaToppings.ham}
              onClick={props.onClick}
            />
            <span className={classes.option}>Ham</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsPrice}
              data-item='salami'
              checked={cartCtx.pizzaToppings.salami}
              onClick={props.onClick}
            />
            <span className={classes.option}>Salami</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
      </div>
    </div>
  );
};

export default PizzaToppings;
