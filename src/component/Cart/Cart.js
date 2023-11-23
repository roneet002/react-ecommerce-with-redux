import React from 'react'
import './Cart.css';
import { useDispatch } from "react-redux";
import {deleteItemHandler} from './../../store/AddtoCartSlice'
// import QuantitySelect from './../Common/QuantitySelect/QuantitySelect'

const Cart = (props) => {
   const dispatch = useDispatch()

  function deleteHandler(e){
    dispatch(deleteItemHandler(e))

  }



  return (
   <>
   <div className='container'>
<div className='row'>
<div className='col-md-7 col-lg-8'>

<ul className='dGrid'>

  {props.cartItem?.map((prd)=>{
    return(
<li key={prd.id} id={prd.id}>
<div className="img">
            <img src={prd.image} alt={prd.title} />
          </div>
          <div className="btData">
            <p className="title">{prd.title}</p>
            <p className="description">{prd.description}</p>
            <p className="price">₹ <strong>{prd.price}</strong> <del>₹ 12.96</del></p>
            {/* <QuantitySelect
            qty={}
            // getProductQty={props.getProductQty}

             /> */}
             <p>Quantity : {prd.quantity}</p>
            <button onClick={()=>{deleteHandler(prd)}} className='btn btn-secondary'>Delete</button>
    </div>

</li>
   )
  })}



</ul>



</div>




<div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code" />
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>
</div>

   </div>


    </>
  )
}

export default Cart
