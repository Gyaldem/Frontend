import React, { useState } from "react";
import Plus from "../img/plus.svg";
import AddSpacePopup from "../Components/addSpacePopup";
import Space from "../Components/space";

const Spaces = ({ isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spaces, setSpaces] = useState([
    { id: 1, title: "Space 1", emails: ["email1@example.com", "email2@example.com"], challengeName: "Challenge1" },
    { id: 2, title: "Space 2", emails: ["email3@example.com", "email4@example.com"], challengeName: "Challenge2" }
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItemHandler = (item) => {
    setSpaces((prevSpaces) => [...prevSpaces, item]);
    closeModal();
  };

  const deleteSpace = (index) => {
    setSpaces((prevSpaces) => prevSpaces.filter((_, i) => i !== index));
  };

  return (
    <div className={`container pl-10 py-8 mt-10 ${isOpen ? "ml-64 " : "ml-auto"}`}>
      <button
        className="bg-gray hover:shadow-md text-black font-semibold py-2 px-4 rounded-md flex items-center justify-center"
        onClick={openModal}
      >
        <img src={Plus} alt="Add" className="h-6 w-6 mr-1" />
        Add space
      </button>
      {isModalOpen && <AddSpacePopup onClose={closeModal} onAdd={addItemHandler} />}
      <div className="flex flex-wrap mt-6">
        {spaces.map((space, index) => (
          <Space
            key={index}
            title={space.title}
            emails={space.emails}
            challengeName={space.challengeName}
            onDelete={() => deleteSpace(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Spaces;
