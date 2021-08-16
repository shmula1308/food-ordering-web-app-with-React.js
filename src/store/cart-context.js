import React from "react";

const CartContext = React.createContext({
  items: [],
  selectedMenuItem: null,
  itemExtras: () => {},
  itemAmount: () => {},
  priceTotal: null,
  addItem: () => {},
  removeItem: () => {},
  displayItem: () => {},
});

export default CartContext;
