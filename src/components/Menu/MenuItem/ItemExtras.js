import React, { useContext, useEffect } from "react";
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

  const { priceTotal, items } = cartCtx;

  useEffect(() => {
    cartCtx.resetItemOptions();
  }, [items]);

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
    const topping = ev.target.dataset.item;
    const pizzaTopping = {
      toppingName: topping,
      isSelected: ev.target.checked,
    };
    cartCtx.addPizzaToppings(pizzaTopping);
  };

  const pizzaCrustHandler = (crust) => {
    cartCtx.changePizzaCrust(crust);
  };

  const sepcialInstructionsHandler = (ev) => {
    const specialInstructions = ev.target.value;
    cartCtx.addSpecialInstructions(specialInstructions);
  };

  const addItemToCartHandler = (ev) => {
    ev.preventDefault();
    props.onClose();

    const itemCategory = cartCtx.selectedMenuItem.category;
    cartCtx.addItem(itemCategory);
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
              onPizzaSizeChange={pizzaSizeHandler}
              onSelectCheckbox={checkBoxHandler}
              onSelectCrust={pizzaCrustHandler}
            />
            <ItemSpecialInstructions onTextInput={sepcialInstructionsHandler} />
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
