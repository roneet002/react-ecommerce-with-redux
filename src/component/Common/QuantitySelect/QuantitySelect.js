import React, { useState } from "react";


const QuantitySelect = (props) => {
  const [qtyError, setQtyError] = useState(false);

function QtyHandlerBtn(type){
  props.getProductQty(type)
  // if(type === 'minus'){
  // props.getProductQty('minus')
  // }
  // else if(type === "plus"){
    // props.getProductQty('plus')
    // return setQtyError(false);
  // }
  // else{
  //   props.getProductQty('plus')
    //return setQtyError(true);
  // }

}




  return (
    <>
      <div className="qty__container">
        <span>Quantity :</span>
        <p className="btn__group">
          <span
            className="btn minus"
            onClick={() => {QtyHandlerBtn("minus")}}
          >
            -
          </span>

          <span className="btn count">{props.qty}</span>
          <span
            className="btn plus"
            onClick={() => {QtyHandlerBtn("plus")}}
          >
            +
          </span>
        </p>
        {qtyError ? (
          <p className="text-danger">
            {"quantity should not less then 1 or more then 5"}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default QuantitySelect;
