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

  const itemPrice = cartCtx.priceTotal;

  const checkBoxHandler = (ev) => {
    if (ev.target.dataset.size === "large") {
      cartCtx.changePizzaSize("large");
      cartCtx.resetItemExtras("large");
    }
    if (ev.target.dataset.size === "small") {
      cartCtx.changePizzaSize("small");
      cartCtx.resetItemExtras("small");
    }

    let itemExtraPrice;

    if (ev.target.checked) {
      itemExtraPrice = Number(ev.target.value);
    } else {
      itemExtraPrice = -Number(ev.target.value);
    }
    cartCtx.itemExtras(itemExtraPrice);
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

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.item}>
        <form>
          <Header image={cartCtx.selectedMenuItem.mediumSizeImage} alt={cartCtx.selectedMenuItem.alt} />
          <p className={classes.description}>{cartCtx.selectedMenuItem.description}</p>
          <div className={classes.controls}>
            <ItemOptionsCategories
              onClick={pizzaToppingsHandler}
              pizzaToppings={pizzaToppingsCheckbox}
              onSelectCheckbox={checkBoxHandler}
            />
            <ItemSpecialInstructions />
            <Input onAmountChange={itemAmountHandler} />
          </div>
          <div className={classes.actions}>
            <Button type='submit' price={itemPrice}>
              Add to cart
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ItemExtras;
