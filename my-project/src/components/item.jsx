import React from "react";
import LinkedinIcon from "../img/linkedin.svg";
import TrashIcon from "../img/Cross.svg";

const Item = ({ item, onDelete, isOpen }) => {
    return (
        <li className={`mb-2 py-5 px-4 bg-gray cursor-pointer transition duration-300 rounded-lg ${isOpen ? 'w-5/6' : 'w-5/6'}`}>
            <div className="flex justify-between items-center">
                <div className="ml-2">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p>{item.department}</p>
                </div>
                <p>{item.email}</p>
                <div className="flex items-center space-x-4 mr-2">
                    {item.linkedin && (
                        <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
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

export default Item;
