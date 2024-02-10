import React, { useState } from "react";
import ListItems from "../Components/listItems";

const Judges = ({ isOpen }) => {
  const [judges, setJudges] = useState([]);

  const addJudge = (judge) => {
    setJudges([...judges, judge]);
  };

  const deleteJudge = (index) => {
    const updatedJudges = judges.filter((_, i) => i !== index);
    setJudges(updatedJudges);
  };

  return (
    <ListItems
      isOpen={isOpen}
      items={judges}
      addItem={addJudge}
      deleteItem={deleteJudge}
      itemName="Judge"
    />
  );
};

export default Judges;
