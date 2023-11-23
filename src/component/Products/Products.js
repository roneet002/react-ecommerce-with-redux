import React, { useEffect, useState } from 'react'
import './Prodcut.css'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../../store/ProductSlice'
import { STATUSES } from '../../store/ProductSlice'

const Products = () => {
  const disptach = useDispatch();  
  const {data, status} = useSelector(state => state.ProductSlice)


  
// const [fetchProducts, setFetchProducts] = useState()
// const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1)


useEffect(()=>{
disptach(fetchProducts())
}, [])


// async function fetchData(){
//   setLoading(true)
// try{
//   const response = await fetch('https://fakestoreapi.com/products')
//   if(!response.ok){
//     throw new Error('something went wrong')
//   }
//   const data = await response.json()
//   const transformedData = data.map((prd)=>{
//     return{
//           id:prd.id,
//           title:prd.title,
//           description:prd.description,
//           image:prd.image,
//           price:prd.price,
//           // rating:prd.rating.rate,
//     }
//   })
//   setFetchProducts(transformedData)


//   setLoading(false)
// }
// catch(err){
// console.log(err)
// }


// }

const pageChangeHandler = (selectedPage)=>{
  if(selectedPage >= 1 && 
    selectedPage <= data.length &&
    selectedPage !== page){
      setPage(selectedPage)}


}

// useEffect(()=>{
  // fetchData()
  // dispatch(fetchProducts())

// },[])


  return (
    <>
<h1>Our Products</h1>

    {status === STATUSES.LOADING && <p className='loading'>
      <span className='loader'></span>
      <span className='text'>Loading</span>
      </p>}

      
    {status === STATUSES.ERROR && <p className='loading'>{'something went wrong'}</p>}
    
    {status === STATUSES.IDLE && <ProductList 
    fetchProducts={data} 
    changePage={pageChangeHandler}
    page={page}
   />
    }
    
    
    
      
      </>
      
      
  )
}

export default Products
