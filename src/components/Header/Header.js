import React from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/plate.jpg";

const Header = (props) => {
  return (
    <header>
      <div className={classes.banner}>
        <img src={headerImage} alt="Pizza's on a table" />
      </div>
    </header>
  );
};

export default Header;
