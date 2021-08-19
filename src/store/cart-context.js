import React from "react";

const CartContext = React.createContext({
  items: [],
  selectedMenuItem: null,
  itemBasePrice: null,
  priceTotal: null,
  itemExtras: () => {},
  pizzaSize: "small",
  changePizzaSize: () => {},
  changePizzaCrust: () => {},
  addPizzaToppings: () => {},
  resetPizzaToppings: () => {},
  addSpecialInstructions: () => {},
  itemAmount: () => {},
  addItem: () => {},
  removeItem: () => {},
  displayItem: () => {},
  resetItemOptions: () => {},
});

export default CartContext;
