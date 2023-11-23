import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    item:[],
    itemLength:0,
    productAdded:false
}

const AddtoCartSlice = createSlice({
   name:'addToCart',
   initialState,
   reducers:{
    productAddedtoCart(state, action){
        state.productAdded = action.payload
        
        // state.productAdded =false
        // setTimeout(()=>{
        // }, 1000)      


    },
   addtoCartHandler(state, action){
        const findEle = state.item.find((data)=>{
                 return data.id === action.payload.product.id
        })
        if(findEle){
            findEle.quantity = action.payload.product.quantity;
            state.itemLength = state.item.length;
        }
        else{
            state.item.push({...action.payload.product, quantity:1 });
            state.itemLength = state.item.length;
            state.item.productAdded = true;
        }
        console.log(action.payload)

    },
    addtoCartFromListHandler(state, action){
        const findEle = state.item.find((data)=>{
            return data.id === action.payload.product.id
   })
    if(findEle){

        findEle.quantity++
        state.itemLength = state.item.length;
    }
    else{
        state.item.push({...action.payload.product, quantity:1 });
        state.itemLength = state.item.length;
    }
 
    },
    decreaseQuantity(state, action){
        const findEle = state.item.find((data)=>{
            return data.id === action.payload.product.id
        })
        if(findEle){
            findEle.quantity--
            console.log(findEle)
        }
        
    },
    increaseQuanitity(state, action){
        const findEle = state.item.find((data)=>{
            return data.id === action.payload.product.id
        })
        if(findEle){
            findEle.quantity = findEle.quantity + 1;
        }

    },
    deleteItemHandler(state, action){
        const removeItem = state.item.filter((item) => item.id !== action.payload.id);
        state.item = removeItem;

        // if(action.payload.quantity > 1){
        // const filterItem = state.item.find((prd)=>{
        //     return prd.id != action.payload
         
        // })     
        // state.item =  filterItem.quantity--
        //     console.log(state.item)

        // }
        // else{

        //     console.log(action.payload)
        // }
        // state.item = filterItem



        }

    }
    
})

export const {addtoCartHandler,productAddedtoCart,  addtoCartFromListHandler, deleteItemHandler, decreaseQuantity, increaseQuanitity} = AddtoCartSlice.actions

export default AddtoCartSlice.reducer