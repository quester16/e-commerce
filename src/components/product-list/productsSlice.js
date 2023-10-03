import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: [],
    productsLoadingStatus: 'idle',
    itemToCart: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        getCartItem: (state, action) => {
            state.itemToCart.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.productsLoadingStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.productsLoadingStatus = 'idle'
            })
            .addCase(fetchProducts.rejected, state => {
                state.productsLoadingStatus = 'error'
            })
    }
})

export default productSlice.reducer;

export const {getCartItem} = productSlice.actions

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (prop) => {
        const type = prop === 'limit' ? 'products?limit=8' : 'products'
        const request = await fetch(`https://fakestoreapi.com/${type}`)
        const data = await request.json()
        return data;
    }
)
