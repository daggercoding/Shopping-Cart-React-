import React from "react";

function Button(props)
{
    return(

    <button onClick={props.clickHandler} disabled={props.disabled} className={`btn m-lg-2 ${props.color} `}>{props.children}</button>
)}
export default Button;