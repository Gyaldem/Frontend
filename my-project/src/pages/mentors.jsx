import React, { useState } from "react";
import ListItems from "../Components/listItems";

const Mentors = ({ isOpen }) => {
  const [mentors, setMentors] = useState([]);

  const addMentor = (entor) => {
    setMentors([...mentors, entor]);
  };

  const deleteMentor = (index) => {
    const updatedMentors = mentors.filter((_, i) => i !== index);
    setMentors(updatedMentors);
  };

  return (
    <ListItems
      isOpen={isOpen}
      items={mentors}
      addItem={addMentor}
      deleteItem={deleteMentor}
      itemName="Mentor"
    />
  );
};

export default Mentors;
