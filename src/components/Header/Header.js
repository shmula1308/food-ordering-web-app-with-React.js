import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <div className={classes.banner}>
        <img src={props.image} alt={props.alt} />
      </div>
    </header>
  );
};

export default Header;
