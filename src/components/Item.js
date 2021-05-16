import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function addItem() {
    setInCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "added" : "add"} onClick={addItem}>{inCart ? "In Cart" : "Add to Cart"}</button>
    </li>
  );
}




export default Item;
