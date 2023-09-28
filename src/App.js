import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import ProductList from './Components/ProductList/ProductList';
import CreateProduct from "./Components/CreateProduct/CreateProduct"
import FilterProduct from './Components/FilterProduct/FilterProduct';
import "./index.css"

let products = [
  {
      pID: 1, 
      pName: 'Fresh Milk', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: 'images/fresh-milk.png',
      price: 12,
      availableStock:20
  },
  {
      pID: 2, 
      pName: 'Cottage Cheese', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/cottage-cheese.png",
      price: 10,
      availableStock:50
  },
  {
      pID: 3, 
      pName: 'Brocoli', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/brocoli.png",
      price: 15,
      availableStock:10
  },
  {
      pID: 4, 
      pName: 'oranges', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/oranges.png",
      price: 20,
      availableStock:20
  },
  {
      pID: 5, 
      pName: 'Olive oil', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/olive-oil.png",
      price: 14,
      availableStock:10
  }
]

function App() {
  
  let[product,setProducts]=useState(products)
  
  let[filterlist,setfilterlist]=useState("all")

  let displayFilter=product.filter((item)=>{
    if(filterlist=="available")
    {
      return item.isAvailable===true
    }
    if(filterlist=="unAvailable")
    {
      return item.isAvailable===false
    }
    return item
  })
  
  function getProductDetail(data)
  {
   data.pID=product.length+1
   setProducts([data,...product])
  } 
  
  function getFilter(filterName)
  {
   setfilterlist(filterName)
   console.log(filterName)
  }
 

  return (
    <>
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
    <CreateProduct getProductfile={getProductDetail} />
    <FilterProduct FilteredList={getFilter} />
    <ProductList allProduct={displayFilter} />
    </div>
    </div>
    </>
  );
}

export default App;
