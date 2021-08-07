import React from "react";
import imageAsset1 from "../../assets/Cherry-Cheesecake-with-Berry-Sauce.png";
import imageAsset2 from "../../assets/Chocolate-cupcakes.jpeg";
import MenuCategory from "./MenuCategory";
import classes from "./Menu.module.css";

const DUMMY_DATA = [
  {
    id: "s1",
    label: "Desserts",
    image: imageAsset1,
  },
  {
    id: "s2",
    label: "Pizzas",
    image: imageAsset2,
  },
];
const Menu = (props) => {
  return (
    <div className={classes.menu}>
      {DUMMY_DATA.map((section) => (
        <MenuCategory key={section.id} image={section.image} label={section.label} />
      ))}
    </div>
  );
};

export default Menu;
