import React from "react";
import { useNavigate } from "react-router-dom";

function playButton(){
    const naviage = useNavigate();

    const handleClick = () =>{
        naviage('/play');
    };

    return (
        <button onClick = {handleClick}>Play</button>
    );

}

export default playButton;