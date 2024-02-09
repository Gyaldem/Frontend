import React, { useState } from "react";
import JudgeItem from "../components/judgeItem";
import AddJudgePopup from "../components/addJudgePopup";
import Plus from "../img/plus.svg";

const Judges = ({ isOpen }) => {
  const [judges, setJudges] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addJudge = (judge) => {
    setJudges([...judges, judge]);
    closeModal();
  };

  const deleteJudge = (index) => {
    const updatedJudges = judges.filter((_, i) => i !== index);
    setJudges(updatedJudges);
  };

  return (
    <div
      className={`container pl-10 py-8 mt-20 ${isOpen ? "ml-64 " : "ml-auto"}`}
    >
      <button
        className="bg-gray hover:shadow-md text-black font-semibold py-2 px-4 rounded-md flex items-center justify-center"
        onClick={openModal}
      >
        <img src={Plus} alt="Add" className="h-6 w-6 mr-1" />
        Add Judge
      </button>
      <ul className="mt-8 ml-10">
        {judges.map((judge, index) => (
          <JudgeItem
            key={index}
            judge={judge}
            isOpen={isOpen}
            onDelete={() => deleteJudge(index)}
          />
        ))}
      </ul>
      {isModalOpen && <AddJudgePopup onClose={closeModal} onAdd={addJudge} />}
    </div>
  );
};

export default Judges;
