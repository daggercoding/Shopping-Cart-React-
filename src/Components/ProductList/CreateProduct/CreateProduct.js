import ProductForm from "./ProductForm"
function CreateProduct(props)
{
    function productDetail(product)
    {
        props.getProductfile(product)
    }

    return(
        <div className="col-lg-8 mx-auto " style={{backgroundColor:"white",padding:10,marginBottom:20,borderRadius:5}}>
        <ProductForm getProduct={productDetail}/>
        </div>
    )
}
export default CreateProduct;