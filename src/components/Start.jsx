import React, {useRef} from 'react';

const Start = ({setName}) => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setName(inputRef.current.value);
    }
    return (
        <div className="start">
            <input ref={inputRef} placeholder="Enter your name" className="startInput"/>
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    );
}

export default Start;
