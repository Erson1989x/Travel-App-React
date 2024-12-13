import React from "react";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList handleDeleteItem={handleDeleteItem} items={items} />
      <Stats />
    </div>
  );
};

export default App;
