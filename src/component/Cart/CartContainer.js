import React from 'react'
import Cart from './Cart'
import {useDispatch, useSelector } from 'react-redux';
import {decreaseQuantity, increaseQuanitity} from './../../store/AddtoCartSlice'


const CartContainer = () => {
    const disptch = useDispatch();

    const cartItem = useSelector((state) => state.AddtoCartSlice.item);

    // function getProductQty(qtyType){
    //     if(qtyType === 'plus'){
    //      disptch(increaseQuanitity({product:cartItem, qtyType:qtyType}))
    //     }
    //     else{
            
    //        disptch(decreaseQuantity({product:cartItem, qtyType:qtyType}))
    //     }
    //   }


  return (
    <div>
        <Cart cartItem={cartItem} 
        // getProductQty={getProductQty}
                     />

    </div>
  )
}

export default CartContainer