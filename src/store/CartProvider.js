import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  selectedMenuItem: null,
  extraCharges: 0,
  pizzaSize: "Small",
  pizzaCrust: "Thick",
  itemAmount: 1,
  priceTotal: null,
  pizzaToppings: {
    corn: false,
    olives: false,
    mozzarella: false,
    mushrooms: false,
    ham: false,
    salami: false,
  },
  specialInstructionsText: null,
};

const cartReducer = (state, action) => {
  if (action.type === "DISPLAYITEM") {
    return {
      ...state,
      selectedMenuItem: action.item,
      itemBasePrice: action.item.price,
      priceTotal: action.item.price,
    };
  }

  if (action.type === "EXTRAS") {
    const updatedExtraCharges = state.extraCharges + action.extraCharge;
    const updatedPriceTotal = state.itemAmount * (state.selectedMenuItem.price + updatedExtraCharges);
    updatedPriceTotal.toFixed(2);
    return {
      ...state,
      extraCharges: updatedExtraCharges,
      priceTotal: updatedPriceTotal,
    };
  }

  if (action.type === "AMOUNT") {
    const updatedItemAmount = action.itemAmount;
    const updatedPriceTotal = updatedItemAmount * (state.selectedMenuItem.price + state.extraCharges);
    updatedPriceTotal.toFixed(2);
    return {
      ...state,
      itemAmount: updatedItemAmount,
      priceTotal: updatedPriceTotal,
    };
  }
  if (action.type === "PIZZASIZE") {
    const updatedPizzaSize = action.pizzaSize;
    const updatedExtraCharges = updatedPizzaSize === "Large" ? 2 : 0;
    const updatedPriceTotal = state.itemAmount * (state.selectedMenuItem.price + updatedExtraCharges);
    updatedPriceTotal.toFixed(2);
    return {
      ...state,
      pizzaSize: updatedPizzaSize,
      priceTotal: updatedPriceTotal,
      extraCharges: updatedExtraCharges,
      pizzaToppings: {
        corn: false,
        olives: false,
        mozzarella: false,
        mushrooms: false,
        ham: false,
        salami: false,
      },
    };
  }
  if (action.type === "CRUST") {
    const updatedPizzaCrust = action.pizzaCrust;
    return {
      ...state,
      pizzaCrust: updatedPizzaCrust,
    };
  }

  if (action.type === "TOPPING") {
    const clickedTopping = action.pizzaTopping.toppingName;
    const isSelected = action.pizzaTopping.isSelected;
    return {
      ...state,
      pizzaToppings: {
        ...state.pizzaToppings,
        [clickedTopping]: isSelected,
      },
    };
  }

  if (action.type === "NOTES") {
    const specialInstructionsText = action.input.trim();

    return {
      ...state,
      specialInstructions: specialInstructionsText,
    };
  }

  if (action.type === "ADD") {
    // const specialInstructions = action.item.specialInstructions.trim();
    const itemCategory = action.itemCategory;
    let newCartItem;
    let updatedCartItems;
    if (itemCategory === "pizza") {
      newCartItem = {
        id: (Math.random() * 100).toString(),
        title: state.selectedMenuItem.title,
        amount: state.itemAmount,
        price: state.priceTotal.toFixed(2),
        pizzaSize: state.pizzaSize,
        pizzaCrust: state.pizzaCrust,
        pizzaToppings: state.pizzaToppings,
        specialInstructions: state.specialInstructions,
        category: state.selectedMenuItem.category,
      };

      updatedCartItems = state.items.concat(newCartItem);
    }
    if (itemCategory === "dessert") {
      newCartItem = {
        id: (Math.random() * 100).toString(),
        title: state.selectedMenuItem.title,
        amount: state.itemAmount,
        price: state.priceTotal.toFixed(2),
        specialInstructions: state.specialInstructions,
        category: state.selectedMenuItem.category,
      };

      updatedCartItems = state.items.concat(newCartItem);
    }

    return {
      ...state,
      items: updatedCartItems,
    };
  }

  if (action.type === "REMOVE") {
    const updatedCartItems = state.items.filter((item) => item.id !== action.id);

    return {
      ...state,
      items: updatedCartItems,
    };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      pizzaToppings: {
        corn: false,
        olives: false,
        mozzarella: false,
        mushrooms: false,
        ham: false,
        salami: false,
      },
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const displayItemExtrasHandler = (item) => {
    dispatchCartAction({ type: "DISPLAYITEM", item: item });
  };

  const itemExtrasHandler = (extraCharge) => {
    console.log(extraCharge);
    dispatchCartAction({ type: "EXTRAS", extraCharge: extraCharge });
  };

  const itemAmountHandler = (itemAmount) => {
    dispatchCartAction({ type: "AMOUNT", itemAmount: itemAmount });
  };

  const pizzaSizeHandler = (pizzaSize) => {
    dispatchCartAction({ type: "PIZZASIZE", pizzaSize: pizzaSize });
  };
  const pizzaCrustHandler = (crust) => {
    dispatchCartAction({ type: "CRUST", pizzaCrust: crust });
  };

  const pizzaToppingsHandler = (topping) => {
    dispatchCartAction({ type: "TOPPING", pizzaTopping: topping });
  };

  const specialInstructionsHandler = (text) => {
    dispatchCartAction({ type: "NOTES", input: text });
  };

  const addItemToCartHandler = (category) => {
    dispatchCartAction({ type: "ADD", itemCategory: category });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const resetItemOptionsHandler = () => {
    dispatchCartAction({ type: "RESET" });
  };

  const cartContext = {
    items: cartState.items,
    selectedMenuItem: cartState.selectedMenuItem,
    priceTotal: cartState.priceTotal,
    pizzaSize: cartState.pizzaSize,
    pizzaToppings: cartState.pizzaToppings,
    itemExtras: itemExtrasHandler,
    changePizzaSize: pizzaSizeHandler,
    changePizzaCrust: pizzaCrustHandler,
    addPizzaToppings: pizzaToppingsHandler,
    addSpecialInstructions: specialInstructionsHandler,
    itemAmount: itemAmountHandler,
    displayItem: displayItemExtrasHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetItemOptions: resetItemOptionsHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
