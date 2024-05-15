import React from "react";
import "./ProductCard.css";




const ProductCard = ({...props}) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img
          src={props.nameImage}
          alt={props.productName}
          className="mouse"
        />
      </div>

      <div className="contentBox">
        <h3>{props.productName}</h3>
        <h2 className="price">
          {props.unitPrice}<small>USD</small> 
        </h2>
        <a href="#" className="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
