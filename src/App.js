import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import ProductList from './Components/ProductList/ProductList';
import CreateProduct from "../src/Components/ProductList/CreateProduct/CreateProduct"


function App() {
  let[data,setData]=useState(null)
  function getProductDetail(data)
  {
    setData(data)
  } 

  return (
    <>
    <CreateProduct getProductfile={getProductDetail} />
    <ProductList newProduct={data} />
    </>
  );
}

export default App;
