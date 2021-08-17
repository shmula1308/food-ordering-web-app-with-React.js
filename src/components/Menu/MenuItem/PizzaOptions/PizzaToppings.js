import React, { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import Checkbox from "../../../UI/CheckBox";
import classes from "./PizzaToppings.module.css";

const PizzaToppings = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(props.pizzaToppings);

  const pizzaToppingsPrice = cartCtx.pizzaSize === "small" ? "+0.70" : "+1.20";
  const pizzaToppingsValue = cartCtx.pizzaSize === "small" ? "+0.70" : "+1.20";

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
              value={pizzaToppingsValue}
              data-item='corn'
              checked={props.pizzaToppings.corn}
              onClick={props.onClick}
            />
            {/* <Checkbox onChange={props.onSelectCheckbox} value={pizzaToppingsValue} item='corn' /> */}
            <span className={classes.option}>Corn</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsValue}
              data-item='olives'
              checked={props.pizzaToppings.olives}
              onClick={props.onClick}
            />
            {/* <Checkbox onChange={props.onSelectCheckbox} value={pizzaToppingsValue} item='olives' /> */}
            <span className={classes.option}>Olives</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsValue}
              data-item='mozzarella'
              checked={props.pizzaToppings.mozzarella}
              onClick={props.onClick}
            />
            {/* <Checkbox onChange={props.onSelectCheckbox} value={pizzaToppingsValue} item='mozzarella' /> */}
            <span className={classes.option}>Mozzarella</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsValue}
              data-item='mushrooms'
              checked={props.pizzaToppings.mushrooms}
              onClick={props.onClick}
            />
            {/* <Checkbox onChange={props.onSelectCheckbox} value={pizzaToppingsValue} item='mushrooms' /> */}
            <span className={classes.option}>Mushrooms</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsValue}
              data-item='ham'
              checked={props.pizzaToppings.ham}
              onClick={props.onClick}
            />
            {/* <Checkbox onChange={props.onSelectCheckbox} value={pizzaToppingsValue} item='ham' /> */}
            <span className={classes.option}>Ham</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
        <label>
          <div className={classes["options-control"]}>
            <input
              type='checkbox'
              onChange={props.onSelectCheckbox}
              value={pizzaToppingsValue}
              data-item='salami'
              checked={props.pizzaToppings.salami}
              onClick={props.onClick}
            />
            {/* <Checkbox onChange={props.onSelectCheckbox} value={pizzaToppingsValue} item='salami' /> */}
            <span className={classes.option}>Salami</span>
          </div>
          <span className={classes["option-price"]}>{pizzaToppingsPrice}</span>
        </label>
      </div>
    </div>
  );
};

export default PizzaToppings;
