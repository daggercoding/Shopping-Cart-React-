import React from "react";
import Productdetails from "./Productdetails"
import {useState} from "react"

function Products(props)
{
  let[stock,setStock]=useState(props.stock)
 function getStock(stocks)
 {
   setStock(stocks)
 }
 

    return(
        <>
       <ul className="list-group shadow">
       <li className="list-group-item" style={{backgroundColor:props.avialable?`"white`:`lightgray`}}>
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex ">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <div style={{display:"flex",justifyContent:"space-evenly",margin:15}}>
          <h6 style={{color:"green"}}>TOTAL STOCK  :{props.stock}</h6>
          <h6 style={{color:"red"}}>REMAINING STOCK  :{stock}</h6>
          </div>
          <p className="font-italic text-muted mb-0 small">{props.description}</p>
          <Productdetails price={props.price}  avialable={props.avialable} stock={props.stock} getStock={getStock} />
        </div><img src={props.image} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
        </div>
    </li>
</ul>
        </>
    )
}
export default Products;