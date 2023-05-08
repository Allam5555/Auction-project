import React from "react";
import ProductCard from "./components/priductitem";
import './style/ProductList.css';
import {Data} from '../../core/data/Data'

const ProductList =()=>{
const productData=Data;


    return (<div className="product-list">

{
    productData.map((productData)=>{
return (
 
  <ProductCard key={productData.id }
  name={productData.name} 
  des={productData.description} 
  img={productData.image}/>
 
 ) 

    })  

}
    </div>
    
    )
};
export default ProductList;