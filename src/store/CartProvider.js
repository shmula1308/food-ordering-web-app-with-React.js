import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  selectedMenuItem: null,
  itemBasePrice: null,
  extraCharges: 0,
  pizzaSize: "Small",
  pizzaCrust: "Thick",
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
    const updatedExtraCharges = updatedPizzaSize === "Large" ? 2 : 0;
    const updatedPriceTotal = state.itemAmount * (state.itemBasePrice + updatedExtraCharges);
    return {
      ...state,
      pizzaSize: updatedPizzaSize,
      priceTotal: updatedPriceTotal,
      extraCharges: updatedExtraCharges,
    };
  }
  if (action.type === "CRUST") {
    const updatedPizzaCrust = action.pizzaCrust;
    console.log(updatedPizzaCrust);
    return {
      ...state,
      pizzaCrust: updatedPizzaCrust,
    };
  }
  if (action.type === "ADD") {
    const specialInstructions = action.item.specialInstructions.trim();
    const newCartItem = {
      title: state.selectedMenuItem.title,
      amount: state.itemAmount,
      price: state.priceTotal.toFixed(2),
      pizzaSize: state.pizzaSize,
      pizzaCrust: state.pizzaCrust,
      pizzaToppings: action.item.pizzaToppings,
      specialInstructions: specialInstructions,
    };

    const updateCartItems = state.items.concat(newCartItem);
    console.log(updateCartItems);

    return {
      ...state,
      items: updateCartItems,
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
    console.log(extraCharge);
    dispatchCartAction({ type: "extras", extraCharge: extraCharge });
  };

  const itemAmountHandler = (itemAmount) => {
    dispatchCartAction({ type: "amount", itemAmount: itemAmount });
  };

  const pizzaSizeHandler = (pizzaSize) => {
    dispatchCartAction({ type: "pizzaSize", pizzaSize: pizzaSize });
  };
  const pizzaCrustHandler = (crust) => {
    dispatchCartAction({ type: "CRUST", pizzaCrust: crust });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const cartContext = {
    items: cartState.items,
    selectedMenuItem: cartState.selectedMenuItem,
    itemBasePrice: cartState.itemBasePrice,
    priceTotal: cartState.priceTotal,
    itemExtras: itemExtrasHandler,
    pizzaSize: cartState.pizzaSize,
    changePizzaSize: pizzaSizeHandler,
    changePizzaCrust: pizzaCrustHandler,
    itemAmount: itemAmountHandler,
    displayItem: displayItemExtrasHandler,
    addItem: addItemToCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
