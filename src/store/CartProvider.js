import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  selectedMenuItem: null,
  itemBasePrice: null,
  extraCharges: 0,
  pizzaSize: "small",
  itemAmount: 1,
  priceTotal: null,
};

const cartReducer = (state, action) => {
  if (action.type === "displayItem") {
    return {
      ...state,
      selectedMenuItem: action.item,
      itemBasePrice: action.item.price,
      priceTotal: action.item.price,
    };
  }

  if (action.type === "extras") {
    const updatedExtraCharges = state.extraCharges + action.extraCharge;
    const updatedPriceTotal = state.itemAmount * (state.itemBasePrice + updatedExtraCharges);

    return {
      ...state,
      extraCharges: updatedExtraCharges,
      priceTotal: updatedPriceTotal,
    };
  }

  if (action.type === "amount") {
    const updatedItemAmount = action.itemAmount;
    const updatedPriceTotal = updatedItemAmount * (state.itemBasePrice + state.extraCharges);

    return {
      ...state,
      itemAmount: updatedItemAmount,
      priceTotal: updatedPriceTotal,
    };
  }
  if (action.type === "pizzaSize") {
    const updatedPizzaSize = action.pizzaSize;

    return {
      ...state,
      pizzaSize: updatedPizzaSize,
    };
  }

  if (action.type === "resetExtras") {
    console.log(action.pizzaSize);
    const updatedExtraCharges = 2;
    const updatedPriceTotal = state.itemAmount * (state.itemBasePrice + updatedExtraCharges);
    return {
      ...state,
      extraCharges: 0,
      priceTotal: updatedPriceTotal,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const displayItemExtrasHandler = (item) => {
    dispatchCartAction({ type: "displayItem", item: item });
  };

  const itemExtrasHandler = (extraCharge) => {
    dispatchCartAction({ type: "extras", extraCharge: extraCharge });
  };

  const resetItemExtrasHandler = (pizzaSize) => {
    dispatchCartAction({ type: "resetExtras", pizzaSize: pizzaSize });
  };

  const itemAmountHandler = (itemAmount) => {
    dispatchCartAction({ type: "amount", itemAmount: itemAmount });
  };

  const pizzaSizeHandler = (pizzaSize) => {
    dispatchCartAction({ type: "pizzaSize", pizzaSize: pizzaSize });
  };

  const cartContext = {
    items: [],
    selectedMenuItem: cartState.selectedMenuItem,
    itemBasePrice: cartState.itemBasePrice,
    priceTotal: cartState.priceTotal,
    itemExtras: itemExtrasHandler,
    resetItemExtras: resetItemExtrasHandler,
    pizzaSize: cartState.pizzaSize,
    changePizzaSize: pizzaSizeHandler,
    itemAmount: itemAmountHandler,
    displayItem: displayItemExtrasHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
