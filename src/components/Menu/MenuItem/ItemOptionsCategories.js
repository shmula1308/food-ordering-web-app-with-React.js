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
      {cartCtx.selectedMenuItem.environmentalFee && <ItemsFees />}
      {cartCtx.selectedMenuItem.pizzaSize && <PizzaSize onPizzaSizeChange={props.onPizzaSizeChange} />}
      {cartCtx.selectedMenuItem.pizzaToppings && (
        <PizzaToppings
          selectedCheckBoxes={props.selectedCheckBoxes}
          onSelectCheckbox={props.onSelectCheckbox}
          pizzaToppings={props.pizzaToppings}
          onClick={props.onClick}
        />
      )}
      {cartCtx.selectedMenuItem.pizzaCrust && <PizzaCrust onSelectCrust={props.onSelectCrust} />}
    </React.Fragment>
  );
};

export default ItemOptionsCategories;
