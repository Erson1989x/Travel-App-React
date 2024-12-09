import React from "react";
import { useState } from "react";

export const Form = ( {handleAddItems} ) => {
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed : false ,
      id: Date.now(),
    };
    console.log(newItem);

    handleAddItems(newItem);

    setDescription("");
    setquantity(1);
  };


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select defaultValue={1} value={quantity} onChange={(e) => setquantity(Number(e.target.value))} >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Form;
