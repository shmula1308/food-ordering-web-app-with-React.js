import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import Menu from "./components/Menu/Menu";
import ItemExtras from "./components/Menu/MenuItem/ItemExtras";
import ItemExtraImg from "./assets/Chocolate-Chip-Cookies-medium.jpeg";
import classes from "./App.module.css";

function App(props) {
  return (
    <div className={classes.app}>
      <Navigation />
      <Header />
      <Menu />
      <ItemExtras image={ItemExtraImg} />
    </div>
  );
}

export default App;
