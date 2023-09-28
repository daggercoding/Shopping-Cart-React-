import "./FilterProducts.css"
let FilterProduct=(props)=>{
    function filterlist(event)
    {
    props.FilteredList(event.target.value)
    }
    return(
        <>
        <select className="filtered" onChange={filterlist} >
        <option value={"all"}>All</option>
        <option value={"available"}>Available</option>
        <option value={"unAvailable"}>unAvailable</option>
        </select >
        <div className="trail">WELCOME TO SHOPPING CART</div>
        </>
    )
}
export default FilterProduct