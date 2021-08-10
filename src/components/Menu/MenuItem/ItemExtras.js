import React from "react";
import Modal from "../../UI/Modal";
import classes from "./ItemExtras.module.css";

const ItemExtras = (props) => {
  return (
    <Modal>
      <div className={classes.item}>
        <form>
          <div className={classes.banner}>
            <img className={classes.image} src={props.image} alt='chocolate cookies' />
          </div>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label className={classes.label}>Special Instructions</label>
              <textarea className={classes.textarea} placeholder='Example: No pepper / sugar / salt please' />
            </div>
            <div className={classes.control}>
              <label className={classes.label}>Quantity</label>
              <input
                className={classes.input}
                type='number'
                defaultValue='1'
                min='1'
                max='100'
                step='1'
                id={"amount_ " + props.id}
              />
            </div>
          </div>
          <div className={classes.actions}>
            <span className={classes.total}>$5.00</span>
            <button type='button'>Add to cart</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ItemExtras;
