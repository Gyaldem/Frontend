import React, { useState } from "react";
import Plus from "../img/Plus.svg";
import Edit from "../img/edit.svg";
import Delete from "../img/delete.svg";
import AddParticipantPopup from "./addParticipantPopup";

const Space = ({ id, title, emails, challengeName, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(emails.map((email, index) => ({ id: index, email })));
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    closeModal();
  };

  const deleteItemHandler = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleEditTitle = () => {
    setIsEditingTitle(true);
  };

  const handleSaveTitle = () => {
    setIsEditingTitle(false);
    setTitle(newTitle);
  };

  return (
    <div className="w-80 h-80 shadow-md rounded-lg p-4 mx-6">
      <div className="flex justify-between items-center">
        {isEditingTitle ? (
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={handleSaveTitle}
            autoFocus
          />
        ) : (
          <h2 className="text-lg font-bold">{title}</h2>
        )}
        <div className="flex items-center space-x-4">
          <button
            className="text-black flex items-center"
            onClick={handleEditTitle}
          >
            <img src={Edit} alt="Edit" className="h-5 w-5" />
          </button>
          <button className="text-black flex items-center" onClick={() => onDelete(id)}>
            <img src={Delete} alt="Delete" className="h-5 w-5" />
          </button>
        </div>
      </div>
      <hr className="my-3 border-t-1 border-first" />
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-black flex items-center text-xs"
          onClick={openModal}
        >
          <img src={Plus} alt="Add" className="h-5 w-5" />
          Add Participant
        </button>
        <p className="bg-first text-white px-2 py-0.5 rounded-lg text-xs">
          {challengeName}
        </p>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-xs px-5 mb-2"
            >
              {item.email}
              <span
                className="cursor-pointer"
                style={{ color: "red", fontSize: "14px" }}
                onClick={() => deleteItemHandler(index)}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && <AddParticipantPopup onClose={closeModal} onAdd={addItemHandler} />}
    </div>
  );
};

export default Space;
