import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import PizzaToppings from "./PizzaOptions/PizzaToppings";
import PizzaCrust from "./PizzaOptions/PizzaCrust";
import PizzaSize from "./PizzaOptions/PizzaSize";
import ItemsFees from "./ItemFees";

const ItemOptionsCategories = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      {cartCtx.itemToDisplay.environmentalFee && <ItemsFees />}
      {cartCtx.itemToDisplay.pizzaSize && <PizzaSize onSelectCheckbox={props.onSelectCheckbox} />}
      {cartCtx.itemToDisplay.pizzaToppings && <PizzaToppings onSelectCheckbox={props.onSelectCheckbox} />}
      {cartCtx.itemToDisplay.pizzaCrust && <PizzaCrust onSelectCheckbox={props.onSelectCheckbox} />}
    </React.Fragment>
  );
};

export default ItemOptionsCategories;
