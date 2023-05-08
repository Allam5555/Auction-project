import React from "react";
import '../style/ProductCard.css'
import Rating from "./Rating";
import Comment from "./coment";
import { Bidding } from "./Bidding";
const ProductCard =(props)=>{
    return(
        <div className="product-card">
       <img src={props.img} alt="product-card " className="card-imgg" />
       <div className="card-info">
       <h1 className="titel">{props.name}</h1>
      
       </div>
         <p className="info">
             {props.des}
        </p>
        <div >
            <Bidding />
            <Rating className="rate"/>
         
        </div>
      <hr className="h5"/>
        <Comment className ="com"/>
        </div>

    )
};
export default ProductCard;
