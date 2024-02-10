import React, { useState } from "react";
import Item from "./item"; 
import AddItemPopup from "./addItemPopup"; 
import Plus from "../img/Plus.svg";

const ListItems = ({ isOpen, items, addItem, deleteItem, itemName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItemHandler = (item) => {
    addItem(item);
    closeModal();
  };

  const deleteItemHandler = (index) => {
    deleteItem(index);
  };

  return (
    <div
      className={`container pl-10 py-8 mt-10 ${isOpen ? "ml-64 " : "ml-auto"}`}
    >
      <button
        className="bg-gray hover:shadow-md text-black font-semibold py-2 px-4 rounded-md flex items-center justify-center"
        onClick={openModal}
      >
        <img src={Plus} alt="Add" className="h-6 w-6 mr-1" />
        Add {itemName}
      </button>
      <ul className="mt-8 ml-10">
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            isOpen={isOpen}
            onDelete={() => deleteItemHandler(index)}
          />
        ))}
      </ul>
      {isModalOpen && <AddItemPopup onClose={closeModal} onAdd={addItemHandler} itemTypeLabel={itemName}/>}
    </div>
  );
};

export default ListItems;
