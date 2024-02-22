import React, { useState } from "react";
import Plus from '../img/plus.svg';

function Feedback() {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [feedbackText, setFeedbackText] = useState('');

    const handlePlusClick = () => {
        setIsInputVisible(true);
    };

    const handleChange = (event) => {
        setFeedbackText(event.target.value);
    };

    return (
        <div className="flex flex-col px-6 py-4 lg:w-[65%] md:w-[80%] sm:w-[90%] bg-gray rounded-2xl w-[100%]">
            <span className="font-bold lg:text-xl md:text-xl text-third">Feedback</span>
            <div className="flex items-center mt-4">
                {isInputVisible ? (
                    <textarea
                        type="text"
                        value={feedbackText}
                        onChange={handleChange}
                        placeholder="Write your feedback here..."
                        className="flex-grow h-auto px-4 py-2 bg-white rounded-lg resize-none focus:outline-0"
                    />
                ) : (
                    <img
                        src={Plus}
                        alt="plus"
                        className="w-6 h-6 cursor-pointer"
                        onClick={handlePlusClick}
                    />
                )}
            </div>
        </div>
    );
}

export default Feedback;
