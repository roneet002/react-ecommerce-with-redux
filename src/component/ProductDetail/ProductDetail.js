import React, {useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import './ProductDetail.css'
import QuantitySelect from '../Common/QuantitySelect/QuantitySelect';
import {useDispatch, useSelector } from "react-redux";
import {addtoCartHandler,productAddedtoCart,  decreaseQuantity, increaseQuanitity} from './../../store/AddtoCartSlice'
import {fetchProducts} from '../../store/ProductSlice'


const ProductDetail = () => {
  const disptch = useDispatch();
  const {data:products, status} = useSelector(state => state.ProductSlice);
  const cartItem = useSelector((state) => state.AddtoCartSlice.item);
  const productAddedStatus = useSelector((state) => state.AddtoCartSlice.productAdded);

  const [data, setData] = useState();
  
 function addToCart(prd) {
     disptch(addtoCartHandler({product:prd}))
     disptch(productAddedtoCart(true))

  }
  let { id } = useParams();
  
  const filterProduct = products.find((item)=>{
    return item.id == id
  })
  const filterItem = cartItem?.find((data)=>{
  return data.id == filterProduct.id
  })
  
function getProductQty(qtyType){
  if(qtyType === 'plus'){
    disptch(increaseQuanitity({product:filterItem, qtyType:qtyType}))
  }
  else{
    disptch(decreaseQuantity({product:filterItem, qtyType:qtyType}))
  }
}


  // const fetachProduct = async ()=>{
  //   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //   const responseData = await res.json()

  //   setData(responseData) 
  // }
  //   useEffect(() => {
  //   fetachProduct();
  // }, []);


  return (
    <div className='container-fluid'>
<div className='row'>
<section className='col-lg-5'>
<div className='detailImg'>
   <img src={filterProduct?.image} alt={filterProduct?.title}/>

</div>
</section>
<section className='col-lg-7'>
  <article className='bgwhite'>
  <h1>{filterProduct?.title} 
  </h1>
  <p>{filterProduct?.description}</p>
  <p className='price'>Price: &#8377; {filterProduct?.price}</p>
  <p className='category'>Category : {filterProduct?.category}</p>

 {filterItem ? <QuantitySelect
 getProductQty={getProductQty}
  qty={filterItem.quantity} /> : <QuantitySelect 
  getProductQty={getProductQty}
  qty={1} />}
  
{filterItem ? 
<button className='primaryBtn' onClick={()=>{addToCart(filterItem)}}>Add to Cart</button>
:
<button className='primaryBtn' onClick={()=>{addToCart(filterProduct)}}>Add to Cart</button>
}
{productAddedStatus ?  <p className='productAdded'>
  
  <span className='checkIcon'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#4CAF50" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></span>
  {`product Added successfully`}</p> : ''}

  
  
  </article>
  
  </section>

</div>


    </div>
  )
}

export default ProductDetail
