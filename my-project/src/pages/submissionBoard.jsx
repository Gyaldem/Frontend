import React, { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown-now";

const SubmissionBoard = ({ isOpen }) => {
  const [editMode, setEditMode] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (timerRef.current && !timerRef.current.contains(event.target)) {
        console.log("Saving timer:", { hours, minutes, seconds });
        setEditMode(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              setIsActive(false);
            }
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isActive, hours, minutes, seconds]);

  const handleInputChange = (e) => {
    if (!isActive) {
      const { name, value } = e.target;
      const parsedValue = parseInt(value);

      if (!isNaN(parsedValue)) {
        if (name === "hours") {
          setHours(Math.min(23, Math.max(0, parsedValue)));
        } else if (name === "minutes") {
          setMinutes(Math.min(59, Math.max(0, parsedValue)));
        } else if (name === "seconds") {
          setSeconds(Math.min(59, Math.max(0, parsedValue)));
        }
      }
    }
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const items = [
    {
      sequentialNumber: 1,
      teamName: "Team1",
      challengeName: "Challenge1",
      submissionTime: "At 16:00pm",
    },
    {
      sequentialNumber: 2,
      teamName: "Team2",
      challengeName: "Challenge2",
      submissionTime: "At 17:30pm",
    }
  ];

  return (
    <div className={` h-full ${isOpen ? "ml-64" : "ml-20"}`} ref={timerRef}>
      <div className="flex flex-col items-center ml-80 mt-10">
        <div className="text-xl flex">
          <div className="flex flex-col items-center space-y-2 ml-20">
            <span className="text-8xl">
              {editMode === "hours" || !isActive ? (
                <input
                  type="number"
                  min="0"
                  max="23"
                  name="hours"
                  value={hours}
                  onChange={handleInputChange}
                  className="w-40"
                />
              ) : (
                formatTime(hours)
              )}
            </span>
            <span>hours</span>
          </div>
          <p className="text-8xl">:</p>
          <div className="flex flex-col items-center space-y-2 ">
            <span className="text-8xl">
              {editMode === "minutes" || !isActive ? (
                <input
                  type="number"
                  min="0"
                  max="59"
                  name="minutes"
                  value={minutes}
                  onChange={handleInputChange}
                  className="w-40"
                />
              ) : (
                formatTime(minutes)
              )}
            </span>
            <span>minutes</span>
          </div>
          <p className="text-8xl">:</p>
          <div className="flex flex-col items-center space-y-2 ">
            <span className="text-8xl">
              {editMode === "seconds" || !isActive ? (
                <input
                  type="number"
                  min="0"
                  max="59"
                  name="seconds"
                  value={seconds}
                  onChange={handleInputChange}
                  className="w-40"
                />
              ) : (
                formatTime(seconds)
              )}
            </span>
            <span>seconds</span>
          </div>
        </div>
        <button
          className="bg-second hover:shadow-md text-white font-semibold py-2 px-4 rounded-md ml-20 mt-10"
          onClick={handleStartStop}
        >
          {isActive ? "Stop" : "Start"}
        </button>
      </div>
      <div className=" mt-20 w-full ml-40">
        <ul>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center   bg-gray rounded-xl p-5 mb-2"
            >
              <div className="flex items-center space-x-20 ">
                <span className=" font-bold">{`${item.sequentialNumber}`}</span>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{item.teamName}</span>
                  <span className="">{item.submissionTime}</span>
                </div>
              </div>
              <span className="bg-first text-white px-2 py-0.5 rounded-lg text-xs">
                {item.challengeName}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubmissionBoard;
