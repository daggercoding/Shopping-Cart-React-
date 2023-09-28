import ProductForm from "./ProductForm"
import { useState } from "react";
function CreateProduct(props)
{
    let[form,setForm]=useState(false)

    function productDetail(product)
    {
        props.getProductfile(product)
    }
    function openForm()
    {
     setForm(true)
    }
    function hideForm()
    {
        setForm(false)
    }

    return(
        <div style={{backgroundColor:"white",padding:10,borderRadius:5}}>
        {!form && <button onClick={openForm}>New Item</button>}
        {form && <ProductForm getProduct={productDetail} hideForm={hideForm}/>}
        </div>
    )
}
export default CreateProduct;