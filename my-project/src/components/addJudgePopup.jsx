import React, { useState } from "react";
import { Menu } from "@headlessui/react"; 
import DropdownIcon from "../img/dropDown.svg"; 

const AddJudgePopup = ({ onClose, onAdd }) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [department, setDepartment] = useState("");
  const [linkedinError, setLinkedinError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJudge = { name, email, linkedin, department };
    onAdd(newJudge);
    setName("");
    setEmail("");
    setLinkedin("");
    setDepartment("");
    onClose();
  };

  const handleLinkedinChange = (e) => {
    const value = e.target.value;
    setLinkedin(value);
    // Regular expression for URL validation
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    // Check if the input value matches the URL pattern
    if (!urlPattern.test(value)) {
      setLinkedinError("Please enter a valid LinkedIn URL");
    } else {
      setLinkedinError("");
    }
  };

  // Disable the submit button if there's an error in the LinkedIn URL input
  const isAddJudgeDisabled = linkedinError !== "";

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
          <h2 className="text-xl font-semibold">Add Judge</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full shadow-md rounded-lg px-3 py-2.5 focus:outline-none"
              required
            />
          </div>
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
          <div className="mb-4">
            <input
              type="text"
              value={linkedin}
              placeholder="LinkedIn URL"
              onChange={handleLinkedinChange}
              className={`w-full shadow-md rounded-lg px-3 py-2.5 focus:outline-none ${linkedinError ? 'border-red-500' : ''}`}
            />
            {linkedinError && <p className="text-red-500 text-sm">{linkedinError}</p>}
          </div>
          <div className="relative w-full">
            <Menu
              as="div"
              className="relative inline-block text-left"
              style={{ width: "100%" }}
            >
              <div>
                <Menu.Button className="flex justify-between items-center w-full bg-white shadow-md rounded-lg px-3 py-2 focus:outline-none">
                  <span className="text-black">
                    {department ? department : "Select a department"}
                  </span>
                  <img src={DropdownIcon} alt="Dropdown" className="h-5 w-5" />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute z-10 mt-1 w-full bg-white shadow-md rounded-md py-1 transition-opacity">
                {options.map((option) => (
                  <Menu.Item key={option.value}>
                    {({ active }) => (
                      <button
                        onClick={() => setDepartment(option.value)}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray ${
                          active ? "bg-gray" : ""
                        }`}
                      >
                        {option.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </div>

          <button
            type="submit"
            className={`mt-4 bg-second text-white font-bold py-2 px-4 rounded w-full ${isAddJudgeDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isAddJudgeDisabled}
          >
            Add Judge
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJudgePopup;
