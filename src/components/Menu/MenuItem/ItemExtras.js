import React from "react";
import Modal from "../../UI/Modal";
import ItemOptions from "./ItemOptions";
import ItemSpecialInstructions from "./ItemSpecialInstructions";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import classes from "./ItemExtras.module.css";

const ItemExtras = (props) => {
  return (
    <Modal>
      <div className={classes.item}>
        <form>
          <div className={classes.banner}>
            <img className={classes.image} src={props.image} alt='chocolate cookies' />
          </div>
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
