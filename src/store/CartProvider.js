import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [displayedItem, setDisplayedItem] = useState({});

  const displayItemExtras = (item) => {
    setDisplayedItem(item);
  };

  const cartContext = {
    itemToDisplay: displayedItem,
    // totalAmount: displayedItem.price,
    displayItem: displayItemExtras,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
