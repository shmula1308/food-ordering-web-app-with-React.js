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
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.item}>
        <form>
          <Header image={cartCtx.itemToDisplay.mediumSizeImage} />
          <p className={classes.description}>{cartCtx.itemToDisplay.description}</p>
          <div className={classes.controls}>
            <ItemOptionsCategories />
            <ItemSpecialInstructions />
            <Input />
          </div>
          <div className={classes.actions}>
            <Button type='submit' price={cartCtx.itemToDisplay.price}>
              Add to cart
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ItemExtras;
