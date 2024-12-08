import React from "react";

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {  }}>
        {item.description} - {item.quantity}{" "}
      </span>
      <button style={{ color: "red", fontSize: "3rem" }}>&times;</button>
    </li>
  );
};

export default Item;
