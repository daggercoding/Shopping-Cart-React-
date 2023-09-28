import React from "react";
import Button from "./Button";
import { useState } from "react";




function ProductDetails(props)
{
let [productCount,setProductCount]=useState(0)
let [stock,setStock]=useState(props.stock)


let badgeColor="badge"
badgeColor+= props.avialable?" bg-primary":" bg-danger"


function increment()
{
    setProductCount(++productCount)
    setStock(--stock)
    props.getStock(stock)
}

function decrement()
{
setProductCount(--productCount)
setStock(++stock)
props.getStock(stock)
}
  
    return(
        <>
        <div className="d-flex align-items-center justify-content-start mt-1" >
            <h6 className="font-weight-bold my-2">${props.price}</h6>
            <Button clickHandler={decrement} disabled={productCount===0}color={"bg-danger"}>-</Button>
            <span style={{width:30,textAlign:"center"}}>{productCount}</span>
            <Button clickHandler={increment} disabled={productCount==props.stock} color={"bg-primary"}>+</Button>
            <span className={badgeColor}>{props.avialable?"Available":"unAvailable"}</span>
          </div></>
    )
}
export default ProductDetails;  