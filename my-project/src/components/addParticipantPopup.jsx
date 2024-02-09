import React, { useState } from "react";

const AddParticipantPopup = ({ onClose, onAdd }) => { 
  
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {email}; 
    onAdd(newItem);
    setEmail("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <div className="bg-white p-8 rounded-lg w-96 relative shadow-md">
        <span
          className="absolute top-4 right-4 cursor-pointer"
          style={{ color: "red" }}
          onClick={onClose}
        >
          &times;
        </span>

        <div className="flex justify-center mb-8">
          <h2 className="text-xl font-semibold">Add Participant</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full shadow-md rounded-lg px-3 py-2.5 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 bg-second text-white font-bold py-2 px-4 rounded w-full "
          >
            Add Participant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddParticipantPopup;
