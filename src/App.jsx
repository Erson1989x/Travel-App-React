import React from "react";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
import { useState } from "react";
import initialItems from "./components/PackingList/initialItems";
const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
  } 

  return (
    <div>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList handleClearList={handleClearList} handleToggleItem={handleToggleItem} handleDeleteItem={handleDeleteItem} items={items} />
      <Stats items={items} />
    </div>
  );
};

export default App;
