import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 0,
    total:0,
  },
  reducers :{
    addProduct:(state,action)=>{
      state.product.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;

    },
    reset: (state) => {
      state.product = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {addProduct,reset} = cartSlice.actions;
export default cartSlice.reducer;