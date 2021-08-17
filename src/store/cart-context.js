import React from "react";

const CartContext = React.createContext({
  items: [],
  selectedMenuItem: null,
  itemBasePrice: null,
  priceTotal: null,
  itemExtras: () => {},
  pizzaSize: "small",
  changePizzaSize: () => {},
  itemAmount: () => {},
  addItem: () => {},
  removeItem: () => {},
  displayItem: () => {},
});

export default CartContext;
