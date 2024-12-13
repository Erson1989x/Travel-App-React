import React from "react";

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => handleToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {  }}>
        {item.description} - {item.quantity}{" "}
      </span>
      <button onClick={() => handleDeleteItem(item.id)} style={{ color: "red", fontSize: "3rem" }}>&times;</button>
    </li>
  );
};

export default Item;
