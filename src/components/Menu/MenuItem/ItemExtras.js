import React from "react";
import Modal from "../../UI/Modal";
import ItemExtraImg from "../../../assets/Chocolate-Chip-Cookies-medium.jpeg";
import ItemOptions from "./ItemOptions";
import ItemSpecialInstructions from "./ItemSpecialInstructions";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Header from "../../Header/Header";
import classes from "./ItemExtras.module.css";

const ItemExtras = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.item}>
        <form>
          <Header image={ItemExtraImg} />
          <p className={classes.description}>Fusilli pasta, plum tomatoes, garlic, goat cheese and basil</p>
          <div className={classes.controls}>
            <ItemOptions />
            <ItemSpecialInstructions />
            <Input />
          </div>
          <div className={classes.actions}>
            <Button type='submit'>Add to cart</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ItemExtras;
