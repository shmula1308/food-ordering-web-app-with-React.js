import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import Menu from "./components/Menu/Menu";
import ItemExtras from "./components/Menu/MenuItem/ItemExtras";
import Cart from "./components/Cart/Cart";
import headerImage from "./assets/plate.jpg";
import CartProvider from "./store/CartProvider";
import classes from "./App.module.css";

function App() {
  const [extrasIsShown, setExtrasIsShown] = useState(false);
  const [cartIsShown, setcartIsShown] = useState(false);
  const [menuIsShown, setMenuIsShown] = useState(true);

  const hideItemExtrasHandler = () => {
    setExtrasIsShown(false);
  };
  const showItemExtrasHandler = () => {
    setExtrasIsShown(true);
  };

  const showCartHandler = () => {
    setcartIsShown(true);
    setMenuIsShown(false);
  };

  return (
    <CartProvider>
      <div className={classes.app}>
        <Navigation showCart={showCartHandler} />
        <Header image={headerImage} />
        {menuIsShown && <Menu onShow={showItemExtrasHandler} />}
        {cartIsShown && <Cart />}
        {extrasIsShown && <ItemExtras onClose={hideItemExtrasHandler} />}
      </div>
    </CartProvider>
  );
}

export default App;
