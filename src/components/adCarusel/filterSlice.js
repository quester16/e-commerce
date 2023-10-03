import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    filter: [],
    category: [],
    categoryLoadingStatus: 'idle'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getCategory.pending, state => {
                state.categoryLoadingStatus = 'loading'
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.category = action.payload
                state.categoryLoadingStatus = 'idle'
            })
            .addCase(getCategory.rejected, state => {
                state.categoryLoadingStatus = 'error'
            })
    }
})

export default filterSlice.reducer;

export const getCategory = createAsyncThunk(
    'filters/getCategory',
    async () => {
        const req = await fetch('https://fakestoreapi.com/products/categories')
        return await req.json()
    }
)


