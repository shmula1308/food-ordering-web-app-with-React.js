import React, { useContext } from "react";
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

  const itemPrice = cartCtx.priceTotal;
  console.log(itemPrice);

  const checkBoxHandler = (ev) => {
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

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.item}>
        <form>
          <Header image={cartCtx.selectedMenuItem.mediumSizeImage} alt={cartCtx.selectedMenuItem.alt} />
          <p className={classes.description}>{cartCtx.selectedMenuItem.description}</p>
          <div className={classes.controls}>
            <ItemOptionsCategories onSelectCheckbox={checkBoxHandler} />
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
