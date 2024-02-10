import React, { useState } from "react";
import Plus from '../img/Plus.svg';

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
        <div className="flex flex-col w-3/4 px-6 py-4 lg:w-2/3 md:w-2/3 sm:3/4 bg-gray rounded-2xl">
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
