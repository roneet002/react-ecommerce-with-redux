import React from 'react'
import ProductChild from './ProductChild'


const ProductList = (props) => {

  return (
    <>
    <ul className="productList">
        {props.fetchProducts?.slice(props.page * 10 -10, props.page*10).map((prd)=>{
return(
    <ProductChild 
    key={prd.id}
    title={prd.title}
    description={prd.description}
    price={prd.price}
    image={prd.image}
    // rating={prd.rating.rate}
    id={prd.id}
     />
    
    )
        })}
     
    </ul>
    

    {props.fetchProducts?.length > 0 &&(
  <ul className='pagination'>
  <li
   onClick={()=>{props.changePage(props.page-1)}}
   className={props.page > 1 ? '' : 'disabled'}
   >&larr; Back</li>

    {
    [...Array(props.fetchProducts?.length / 10)].map((_, i) =>{
         return <li
        key={i}
        onClick={()=>{props.changePage(i + 1)}}
        className={props.page === i+1 ? 'active': ''}>{i + 1}</li>

  })
  
  } 

  <li
   onClick={()=>{props.changePage(props.page+1)}}
  className={props.page < props.fetchProducts.length / 10 ? '' : 'disabled'}
  >Next &rarr;</li>
</ul>

)}
    </>
  )
} 

export default ProductList
