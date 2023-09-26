import { useState } from "react"
function CreateForm(props)
{

   /* throw this way also we can change multiple states
    let[userInput,setUserInput]=useState({
        pName:"",
        pPrice:"",
        pDescription:"",
        pSwitch:"",
        pImage:""
    })*/
    let [pName,updateName]=useState("")
    let [pPrice,updatePrice]=useState("")
    let [pDescription,updateDescription]=useState(false)
    let [pSwitch,updateSwitch]=useState("")
    let [pImage,updateImage]=useState("")
    
function nameEventHandler(event)
{   // and by this way we can mange the state
    // setUserInput({...userInput,pName:event.target.value})
    updateName(event.target.value)
}

function priceEventHandler(event)
{
    updatePrice(event.target.value)

}

function descriptionEventHandler(event)
{
    updateDescription(event.target.value)

}
function switchEventHandler(event)
{
    updateSwitch(event.target.checked)

}

function imageEventHandler(event)
{
    updateImage(event.target.value)
    
}

function collectData(event)
{
    event.preventDefault();
    let userData={
        pID: 1, 
        pName: pName, 
        desc: pDescription,
        isAvailable: Boolean(pSwitch),
        image: pImage,
        price: Number(pPrice)     
    }
    updateDescription("")
    updateImage("")
    updateName("")
    updateSwitch(false)
    updatePrice("")

   props.getProduct(userData)
    
}

   return( <>
   <form className="row g-3" onSubmit={collectData}>
        <div className="col-md-6">
            <label forhtml="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameEventHandler} />
        </div>
        <div className="col-md-6">
            <label forhtml="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price" 
                    value={pPrice}
                    onChange={priceEventHandler} />
        </div>

        <div className="form-group">
            <label forhtml="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" 
                    value={pDescription}
                    onChange={descriptionEventHandler}/>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="isAvailable"
            checked={pSwitch}
            onChange={switchEventHandler} />
            <label className="form-check-label" forhtml="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label forhtml="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" 
            value={pImage}
            onChange={imageEventHandler}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    
    </>)
}
export default CreateForm;  