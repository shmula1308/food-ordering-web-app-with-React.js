import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import classes from "./MenuCategory.module.css";

const MenuCategory = (props) => {
  const { label, mainImage, alt, items, onShow, onDisplayItem, sectionId } = props;
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
              mediumSizeImage={item.mediumSizeImage}
              title={item.title}
              description={item.description}
              price={item.price}
              itemId={item.id}
              sectionId={sectionId}
              extrasID={item.extrasID}
              alt={item.alt}
              onShow={onShow}
              onDisplayItem={onDisplayItem}
            />
          ))}
        </ul>
      </details>
    </div>
  );
};

export default MenuCategory;
