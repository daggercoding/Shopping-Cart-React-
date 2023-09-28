import Products from "./Products";


function ProductList(props)
{

    console.log(props.allProduct)
    return props.allProduct.length===0?<h1 className="list-group shadow" style={{height:"25vh",backgroundColor:"white", textAlign:"center",paddingTop:50,marginTop:5,borderRadius:10}}>product is not available</h1>: <ul className="list-group shadow">
        {props.allProduct.map((product,index)=>
        {
         return  <Products
         key={index}
         id={product.pID}
         name={product.pName}
         description={product.desc}
         avialable={product.isAvailable}
         image={product.image}
         price={product.price}
         stock={product.availableStock}
         />
        })}
     </ul>
    
}
export default ProductList;