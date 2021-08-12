import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import classes from "./MenuCategory.module.css";

const MenuCategory = ({ label, mainImage, alt, items, onShow }) => {
  return (
    <div className={classes.category}>
      <details>
        <summary className={classes.label}>{label}</summary>
        <div className={`${classes["main-image"]}`}>
          <img src={mainImage} alt={alt} />
        </div>
        <ul className={classes.list}>
          {items.map((item) => (
            <MenuItem
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
              onShow={onShow}
            />
          ))}
        </ul>
      </details>
    </div>
  );
};

export default MenuCategory;
