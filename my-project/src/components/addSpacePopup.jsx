import React, { useState } from "react";

const AddItemPopup = ({ onClose, onAdd }) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [excel, setExcel] = useState("");
  const [ExcelError, setExcelError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, email, excel, department };
    onAdd(newItem);
    setExcel("");
    onClose();
  };

  const handleExcelChange = (e) => {
    const value = e.target.value;
    setExcel(value);
    // Regular expression for URL validation
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    // Check if the input value matches the URL pattern
    if (!urlPattern.test(value)) {
      setExcelError("Please enter a valid Excel URL");
    } else {
      setExcelError("");
    }
  };

  const isAddItemDisabled = ExcelError !== "";

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
          <h2 className="text-xl font-semibold">Add space</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <input
              type="text"
              value={excel}
              placeholder="Link to an excel file"
              onChange={handleExcelChange}
              className={`w-full shadow-md rounded-lg px-3 py-2.5 focus:outline-none ${ExcelError ? 'border-red-500' : ''}`}
            />
            {ExcelError && <p className="text-red-500 text-sm">{ExcelError}</p>}
          </div>
          <button
            type="submit"
            className={`mt-8 bg-second text-white font-bold py-2 px-4 rounded w-full ${isAddItemDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isAddItemDisabled}
          >
            Generate space
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPopup;
