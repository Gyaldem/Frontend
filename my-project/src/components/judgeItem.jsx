import React from "react";
import LinkedinIcon from "../img/linkedin.svg";
import TrashIcon from "../img/cross.svg";

const JudgeItem = ({ judge, onDelete, isOpen }) => {
    return (
        <li className={`mb-2 py-5 px-4 bg-gray cursor-pointer transition duration-300 rounded-lg ${isOpen ? 'w-5/6' : 'w-5/6'}`}>
            <div className="flex justify-between items-center">
                <div className="ml-2">
                    <p className="text-lg font-semibold">{judge.name}</p>
                    <p>{judge.department}</p>
                </div>
                <p>{judge.email}</p>
                <div className="flex items-center space-x-4 mr-2">
                    {judge.linkedin && (
                        <a href={judge.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon} alt="Linkedin Icon" className="w-6 h-6 text-black hover:text-black" />
                        </a>
                    )}
                    <button onClick={onDelete}>
                        <img src={TrashIcon} alt="Trash Icon" className="w-10 h-10 text-red-500 hover:text-red-700" />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default JudgeItem;
