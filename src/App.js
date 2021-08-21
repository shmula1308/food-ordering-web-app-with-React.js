import React, { useState, useContext } from "react";
import CartContext from "./store/cart-context";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import Menu from "./components/Menu/Menu";
import ItemExtras from "./components/Menu/MenuItem/ItemExtras";
import Cart from "./components/Cart/Cart";
import headerImage from "./assets/plate.jpg";
import classes from "./App.module.css";

function App() {
  const [extrasIsShown, setExtrasIsShown] = useState(false);
  const [cartIsShown, setcartIsShown] = useState(false);
  const [menuIsShown, setMenuIsShown] = useState(true);
  const cartCtx = useContext(CartContext);

  const { resetItemOptions } = cartCtx;

  // useEffect(() => {
  //   resetItemOptions();
  // }, [extrasIsShown]);

  const hideItemExtrasHandler = () => {
    setExtrasIsShown((prevState) => !prevState);
    resetItemOptions();
  };
  const showItemExtrasHandler = () => {
    setExtrasIsShown((prevState) => !prevState);
    resetItemOptions();
  };

  const showCartHandler = () => {
    setcartIsShown(true);
    setMenuIsShown(false);
  };

  const hideCartHandler = () => {
    setcartIsShown(false);
    setMenuIsShown(true);
  };

  return (
    <div className={classes.app}>
      <Navigation showCart={showCartHandler} showMenu={hideCartHandler} />
      <Header image={headerImage} />
      {menuIsShown && <Menu onShow={showItemExtrasHandler} />}
      {cartIsShown && <Cart />}
      {extrasIsShown && <ItemExtras onClose={hideItemExtrasHandler} />}
    </div>
  );
}

export default App;
