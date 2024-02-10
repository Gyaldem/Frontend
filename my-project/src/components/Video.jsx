import { React, useState } from "react";
import VideoIcon from '../img/Play.svg';
import ForrWard from '../img/Forward.svg'


function Video() {
    const [count, setCount] = useState(0);

    const handleInputChange = (event) => {
        const value = event.target.value;
        // Vérifiez si la valeur est un nombre
        if (!isNaN(value)) {
            setCount(parseInt(value));
        }
    };

    const incrementCount = () => {
        if (count < 10) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const decrementCount = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };


    return (
        <div className="flex flex-col items-center justify-between p-8 h-52 w-fit bg-gray rounded-xl shadow-custom">
            <div className="flex flex-col items-center justify-center ">
                <img src={VideoIcon} alt="Github" className="w-8" />
                <span>Video play</span>
                <img src={ForrWard} alt="Forward" className="w-8 cursor" />
            </div>
            <div className="flex flex-row border rounded border-third">
                <span className="w-6 h-6 text-center cursor-pointer" onClick={decrementCount}> - </span>
                <input className="w-6 h-6 text-xs text-center bg-first" value={count} onChange={handleInputChange} />
                <span className="w-6 h-6 text-center cursor-pointer" onClick={incrementCount}> + </span>
            </div>

        </div>

    )
}

export default Video