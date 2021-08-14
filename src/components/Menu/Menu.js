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
        environmentalFee: false,
        pizzaSize: false,
        pizzaToppings: false,
        pizzaCrust: false,
        specialInstruction: true,
        price: 5,
      },
      {
        id: "item2",
        thumbnail: "assets/tiramisu.jpeg",
        mediumSizeImage: "assets/tiramisu-medium.jpeg",
        alt: "Tiramisu in a fluffy way",
        title: "Tiramisu",
        description: "You will fall in love",
        environmentalFee: false,
        pizzaSize: false,
        pizzaToppings: false,
        pizzaCrust: false,
        specialInstruction: true,
        price: 8,
      },
      {
        id: "item3",
        thumbnail: "assets/lemon-creme-brulee.jpeg",
        mediumSizeImage: "assets/lemon-creme-brulee-medium.jpeg",
        alt: "Yellowish cremee brulee",
        title: "Lemon Creme Brulee",
        description: "Let the french sophistication ride you",
        environmentalFee: false,
        pizzaSize: false,
        pizzaToppings: false,
        pizzaCrust: false,
        specialInstruction: true,
        price: 7.5,
      },
      {
        id: "item4",
        thumbnail: "assets/Scoops-kinds-ice-cream.jpeg",
        mediumSizeImage: "assets/Scoops-kinds-ice-cream-medium.jpeg",
        alt: "Red, yellow,pink ice cream scoops on a bowl",
        title: "Ice Cream",
        description: "Go the good old aussie way",
        environmentalFee: false,
        pizzaSize: false,
        pizzaToppings: false,
        pizzaCrust: false,
        specialInstruction: true,

        price: 6,
      },
    ],
  },

  {
    sectionId: "s2",
    label: "Pizzas",
    mainImage: "assets/pizza-medium.jpeg",
    alt: "Colorful pizzas",
    items: [
      {
        id: "item1",
        thumbnail: "assets/pizza-margherita-thumbnail.jpg",
        mediumSizeImage: "assets/pizza-margherita-medium.jpg",
        alt: "Cheesy Margherita Pizza",
        title: "Pizza Margherita",
        description: "Tomato sauce, oregano, garlic and fresh basil",
        environmentalFee: false,
        pizzaSize: true,
        pizzaToppings: true,
        pizzaCrust: true,
        specialInstruction: true,
        price: 8,
      },
      {
        id: "item2",
        thumbnail: "assets/pizza-al-salame-thumbnail.jpg",
        mediumSizeImage: "assets/pizza-al-salame-medium.jpg",
        alt: "Crispy Pizza al salame",
        title: "Pizza al Salame",
        description: "Tomato sauce, mozzarella, salami,sausage, mixed green and black olives and basil.",
        environmentalFee: false,
        pizzaSize: true,
        pizzaToppings: true,
        pizzaCrust: true,
        specialInstruction: true,
        price: 8,
      },
      {
        id: "item3",
        thumbnail: "assets/pizza-capricciosa-thumbnail.jpg",
        mediumSizeImage: "assets/pizza-capricciosa-medium.jpg",
        alt: "Pizza capricciosa",
        title: "Pizza Capricciosa",
        description: "Tomato sauce, mozzarella, ham, artichoke, black olives, parmesan",
        environmentalFee: false,
        pizzaSize: true,
        pizzaToppings: true,
        pizzaCrust: true,
        specialInstruction: true,
        price: 9,
      },
      {
        id: "item4",
        thumbnail: "assets/pizza-calzone-thumbnail.jpg",
        mediumSizeImage: "assets/pizza-calzone-medium.jpg",
        alt: "Folded pizza with crispy looking dough and basil leaves",
        title: "Pizza Calzone",
        description:
          "Folded pizza with tomato, mozzarella, ricotta cheese, ham, salami, extra virgin olive oil, parmesan and fresh basil",
        environmentalFee: false,
        pizzaSize: true,
        pizzaToppings: true,
        pizzaCrust: true,
        specialInstruction: true,
        price: 11,
      },
      {
        id: "item5",
        thumbnail: "assets/pizza-con-prosciutto-e-funghi-thumbnail.jpg",
        mediumSizeImage: "assets/pizza-con-prosciutto-e-funghi-medium.jpg",
        alt: "Pizza topped up with proscciuto and mushrroms",
        title: "Pizza Prosciutto e Funghi",
        description: "Tomato sauce, mozzarella, prosciutto, mushrooms, basil",
        environmentalFee: false,
        pizzaSize: true,
        pizzaToppings: true,
        pizzaCrust: true,
        specialInstruction: true,
        price: 8,
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
