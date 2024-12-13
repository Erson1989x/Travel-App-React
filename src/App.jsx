import React from "react";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
import { useState } from "react";
import initialItems from "./components/PackingList/initialItems";
const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }

  return (
    <div>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList handleToggleItem={handleToggleItem} handleDeleteItem={handleDeleteItem} items={items} />
      <Stats />
    </div>
  );
};

export default App;
