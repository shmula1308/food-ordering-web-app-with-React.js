import React from "react";

const CartContext = React.createContext({
  items: [],
  itemToDisplay: null,
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  displayItem: () => {},
});

export default CartContext;
