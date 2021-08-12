import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import Menu from "./components/Menu/Menu";
import ItemExtras from "./components/Menu/MenuItem/ItemExtras";
import Cart from "./components/Cart/Cart";
import headerImage from "./assets/plate.jpg";
import classes from "./App.module.css";

function App() {
  const [extrasIsShown, setExtrasIsShown] = useState(true);

  const hideItemExtrasHandler = () => {
    setExtrasIsShown(false);
  };
  const showItemExtrasHandler = () => {
    setExtrasIsShown(true);
  };

  return (
    <div className={classes.app}>
      <Navigation />
      <Header image={headerImage} />
      <Menu onShow={showItemExtrasHandler} />
      {/* <Cart /> */}
      {extrasIsShown && <ItemExtras onClose={hideItemExtrasHandler} />}
    </div>
  );
}

export default App;
