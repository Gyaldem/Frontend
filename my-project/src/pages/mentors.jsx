/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItems from "../components/listItems";
import axios from 'axios';

const Mentors = ({ isOpen }) => {
  const [mentors, setMentors] = useState([]);

  const addMentor = async (entor) => {
    setMentors([...mentors, entor]);
    console.log(JSON.stringify(entor));
    axios.post('http://localhost:3000/',entor)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error.message); // Log the error message
    });
};  

  const deleteMentor = async (index) => {
    const entor=mentors[index];
    const updatedMentors = mentors.filter((_, i) => i !== index);
    console.log(entor);
    setMentors(updatedMentors);
    axios.delete(`http://localhost:3000/delete/${entor.id}`, entor )
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error.message); // Log the error message
    });


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
