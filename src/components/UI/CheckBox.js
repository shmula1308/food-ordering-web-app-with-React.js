import React from "react";

const CheckBox = (props) => {
  return <input type='checkbox' onChange={props.onChange} value={props.value} data-item={props.item} />;
};

export default CheckBox;
