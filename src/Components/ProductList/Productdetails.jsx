import React from "react";
import Button from "./Button";
import { useState } from "react";



function ProductDetails(props)
{
let [productCount,setProductCount]=useState(0)


let isAvilable;
if(productCount>0)
{
isAvilable="Available"
}
else{
isAvilable="unAvailable"
}

let badgeColor="badge ml250px "
badgeColor+= isAvilable==="Available"?"bg-primary":"bg-danger"

function noOfproduct()
{
    return productCount>0?productCount:"zero"
}

function increment()
{
    setProductCount(++productCount)
}
function decrement()
{
setProductCount(--productCount)
}
  
    return(
        <>
        <div className="d-flex align-items-center justify-content-start mt-1" >
            <h6 className="font-weight-bold my-2">${props.price}</h6>
            <Button clickHandler={decrement} color={"bg-danger"}>-</Button>
            <span style={{width:30,textAlign:"center"}}>{noOfproduct()}</span>
            <Button clickHandler={increment} color={"bg-primary"}>+</Button>
            <span className={badgeColor}>{isAvilable}</span>
          </div></>
    )
}
export default ProductDetails;  