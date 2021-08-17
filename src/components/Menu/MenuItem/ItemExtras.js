import React, { useContext, useEffect, useState } from "react";
import Modal from "../../UI/Modal";
import ItemOptionsCategories from "./ItemOptionsCategories";
import ItemSpecialInstructions from "./ItemSpecialInstructions";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Header from "../../Header/Header";
import CartContext from "../../../store/cart-context";
import classes from "./ItemExtras.module.css";

const ItemExtras = (props) => {
  const cartCtx = useContext(CartContext);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [pizzaToppingsCheckbox, setPizzaToppingsCheckbox] = useState({
    corn: false,
    olives: false,
    mozzarella: false,
    mushrooms: false,
    ham: false,
    salami: false,
  });

  useEffect(() => {
    setPizzaToppingsCheckbox({
      corn: false,
      olives: false,
      mozzarella: false,
      mushrooms: false,
      ham: false,
      salami: false,
    });
  }, [cartCtx.pizzaSize]);

  const priceTotal = cartCtx.priceTotal;

  const checkBoxHandler = (ev) => {
    let itemExtraPrice;

    if (ev.target.checked) {
      itemExtraPrice = Number(ev.target.value);
    } else {
      itemExtraPrice = -Number(ev.target.value);
    }
    cartCtx.itemExtras(itemExtraPrice);
  };

  const pizzaSizeHandler = (size) => {
    cartCtx.changePizzaSize(size);
  };

  const itemAmountHandler = (ev) => {
    cartCtx.itemAmount(ev.target.value);
  };

  const pizzaToppingsHandler = (ev) => {
    const clickedTopping = ev.target.dataset.item;
    setPizzaToppingsCheckbox({
      ...pizzaToppingsCheckbox,
      [clickedTopping]: ev.target.checked,
    });
  };

  const pizzaCrustHandler = (crust) => {
    cartCtx.changePizzaCrust(crust);
  };

  const textInputHandler = (ev) => {
    const specialInstructions = ev.target.value;
    setSpecialInstructions(specialInstructions);
  };

  const addItemToCartHandler = (ev) => {
    ev.preventDefault();
    props.onClose();

    const cartItem = {
      pizzaToppings: pizzaToppingsCheckbox,
      specialInstructions: specialInstructions,
    };
    cartCtx.addItem(cartItem);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.item}>
        <form onSubmit={addItemToCartHandler}>
          <Header image={cartCtx.selectedMenuItem.mediumSizeImage} alt={cartCtx.selectedMenuItem.alt} />
          <p className={classes.description}>{cartCtx.selectedMenuItem.description}</p>
          <div className={classes.controls}>
            <ItemOptionsCategories
              onClick={pizzaToppingsHandler}
              pizzaToppings={pizzaToppingsCheckbox}
              onPizzaSizeChange={pizzaSizeHandler}
              onSelectCheckbox={checkBoxHandler}
              onSelectCrust={pizzaCrustHandler}
            />
            <ItemSpecialInstructions onTextInput={textInputHandler} />
            <Input onAmountChange={itemAmountHandler} />
          </div>
          <div className={classes.actions}>
            <Button type='submit' price={priceTotal}>
              Add to cart
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ItemExtras;
