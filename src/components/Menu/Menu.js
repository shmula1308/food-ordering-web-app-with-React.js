import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import MenuCategory from "./MenuCategory";
import classes from "./Menu.module.css";

const DUMMY_DATA = [
  {
    sectionId: "s1",
    label: "Desserts",
    mainImage: "assets/Cherry-Cheesecake-with-Berry-Sauce.png",
    alt: "Delicious desserts",
    items: [
      {
        id: "item1",
        thumbnail: "assets/Chocolate-Chip-Cookies.jpg",
        mediumSizeImage: "assets/Chocolate-Chip-Cookies-medium.jpeg",
        alt: "Chocolate Cookies on a table",
        title: "Chocolate Cookies",
        description: "Delicious beyond belief",
        price: 5,
      },
      {
        id: "item2",
        thumbnail: "assets/tiramisu.jpeg",
        mediumSizeImage: "assets/tiramisu-medium.jpeg",
        alt: "Tiramisu in a fluffy way",
        title: "Tiramisu",
        description: "You will fall in love",
        price: 8,
      },
      {
        id: "item3",
        thumbnail: "assets/lemon-creme-brulee.jpeg",
        mediumSizeImage: "assets/lemon-creme-brulee-medium.jpeg",
        alt: "Yellowish cremee brulee",
        title: "Lemon Creme Brulee",
        description: "Let the french sophistication ride you",
        price: 7.5,
      },
      {
        id: "item4",
        thumbnail: "assets/Scoops-kinds-ice-cream.jpeg",
        mediumSizeImage: "assets/Scoops-kinds-ice-cream-medium.jpeg",
        alt: "Red, yellow,pink ice cream scoops on a bowl",
        title: "Ice Cream",
        description: "Go the good old aussie way",
        price: 6,
      },
    ],
  },
];

const Menu = (props) => {
  const cartCtx = useContext(CartContext);

  const displayItemHandler = (sectionId, itemId) => {
    const category = DUMMY_DATA.filter((category) => category.sectionId === sectionId)[0];
    const item = category.items.filter((item) => item.id === itemId)[0];
    cartCtx.displayItem(item);
  };

  return (
    <div className={classes.menu}>
      {DUMMY_DATA.map((section) => (
        <MenuCategory
          key={section.sectionId}
          mainImage={section.mainImage}
          label={section.label}
          items={section.items}
          sectionId={section.sectionId}
          onShow={props.onShow}
          onDisplayItem={displayItemHandler}
        />
      ))}
    </div>
  );
};

export default Menu;
