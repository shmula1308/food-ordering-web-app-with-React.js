import React from "react";

const CartContext = React.createContext({
  items: [],
  itemToDisplay: null,
  addItem: () => {},
  removeItem: () => {},
  displayItem: () => {},
});

export default CartContext;
