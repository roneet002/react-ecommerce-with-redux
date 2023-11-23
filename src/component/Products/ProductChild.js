import React from "react";
import {useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {addtoCartFromListHandler} from './../../store/AddtoCartSlice'



const ProductChild = (props) => {
const disptch = useDispatch();



  function addToCart(prd) {
     disptch(addtoCartFromListHandler({product:prd}))
  }

  return (
    <>
      <li id={props.id} key={props.id}>
             <Link id={props.id} to={`/ProductDetail/${props.id}`}>
          <div className="img">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="btData">
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <p className="price">
              ₹ <strong>{props.price}</strong> <del>₹ 12.96</del>
            </p>
          </div>
        </Link>
        <button className="primaryBtn" onClick={()=>{addToCart(props)}}>
          Add to Cart
        </button>
      </li>
    </>
  );
};

export default ProductChild;
