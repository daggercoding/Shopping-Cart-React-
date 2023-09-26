import React from "react";
import Productdetails from "./Productdetails"

function Products(props)
{
    return(
        <>
       <ul className="list-group shadow">
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex ">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">{props.description}</p>
          <Productdetails price={props.price} description={props.description}/>
        </div><img src={props.image} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
       
        </div>
    </li>
</ul>
        </>
    )
}
export default Products;