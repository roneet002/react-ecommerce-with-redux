import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const initialState = {
data:[],
status: STATUSES.IDLE
}

const ProductSlice  = createSlice({
name:'products',
initialState,
reducers:{
//     setProducts(state, action){
//         state.data = action.payload
//     },
//     setStatus(state, action){
//         state.status = action.payload
//     }  


},
extraReducers: (builder)=>{
builder.addCase(fetchProducts.pending, (state, action)=>{
state.status = STATUSES.LOADING
}).addCase(fetchProducts.fulfilled, (state, action)=>{
    state.data = action.payload;
    state.status = STATUSES.IDLE
}).addCase(fetchProducts.rejected, (state, action)=>{
    state.status = STATUSES.ERROR
})
}
})

export const {setProducts} = ProductSlice.actions

export default ProductSlice.reducer 

// Thunk Data fetching
export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
const res = await fetch('https://fakestoreapi.com/products')
const data = await res.json();
return data
})
