import React from "react";
import classes from "./ItemSpecialInstructions.module.css";

const ItemSpecialInstructions = (props) => {
  return (
    <div className={classes.control}>
      <label className={classes.label}>Special Instructions</label>
      <textarea
        className={classes.textarea}
        placeholder='Example: No pepper / sugar / salt please'
        onChange={props.onTextInput}
      />
    </div>
  );
};

export default ItemSpecialInstructions;
