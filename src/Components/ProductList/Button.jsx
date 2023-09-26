import React from "react";

function Button(props)
{
    return(

    <button onClick={props.clickHandler} className={`btn m-lg-2 ${props.color} `}>{props.children}</button>
)}
export default Button;