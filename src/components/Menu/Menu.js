import React from "react";
import mainImage1 from "../../assets/Cherry-Cheesecake-with-Berry-Sauce.png";
import thumbnail1 from "../../assets/Chocolate-Chip-Cookies.jpg";
import thumbnail2 from "../../assets/tiramisu.jpeg";
import thumbnail3 from "../../assets/lemon-creme-brulee.jpeg";
import thumbnail4 from "../../assets/Scoops-kinds-ice-cream.jpeg";
import MenuCategory from "./MenuCategory";
import classes from "./Menu.module.css";

const DUMMY_DATA = [
  {
    id: "s1",
    label: "Desserts",
    mainImage: mainImage1,
    alt: "Delicious desserts",
    items: [
      {
        id: "item1",
        thumbnail: thumbnail1,
        alt: "Chocolate Cookies on a table",
        title: "Chocolate Cookies",
        description: "Delicious beyond belief",
        price: 5,
      },
      {
        id: "item2",
        thumbnail: thumbnail2,
        alt: "Tiramisu in a fluffy way",
        title: "Tiramisu",
        description: "You will fall in love",
        price: 8,
      },
      {
        id: "item3",
        thumbnail: thumbnail3,
        alt: "Yellowish cremee brulee",
        title: "Lemon Creme Brulee",
        description: "Let the french sophistication ride you",
        price: 7.5,
      },
      {
        id: "item4",
        thumbnail: thumbnail4,
        alt: "Red, yellow,pink ice cream scoops on a bowl",
        title: "Ice Cream",
        description: "Go the good old aussie way",
        price: 6,
      },
    ],
  },
];

const Menu = (props) => {
  return (
    <div className={classes.menu}>
      {DUMMY_DATA.map((section) => (
        <MenuCategory
          key={section.id}
          mainImage={section.mainImage}
          label={section.label}
          items={section.items}
          alt={section.alt}
        />
      ))}
    </div>
  );
};

export default Menu;
