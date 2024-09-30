import React from "react";
import { useNavigate } from "react-router-dom";

function PlayButton(){
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/play');
    };

    return (
        <button onClick = {handleClick}>Play</button>
    );

}

export default PlayButton;