// Code Keypad Component Here
import React from "react";
function Keypad (){
    function handlechange(){
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={handlechange}></input>
        </div>
    )
}

export default Keypad;