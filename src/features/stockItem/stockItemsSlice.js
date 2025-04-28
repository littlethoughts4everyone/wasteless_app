import { createSlice } from "@reduxjs/toolkit";

export const stockItemsSlice = createSlice({
    name: 'stockItems',
    initialState: {
        stockItems: {}
    },
    reducers: {
        addStockItem: (state, action) => {
            const {id} = action.payload;
            state.stockItems[id] = action.payload;
        }
    }
})

export const selectStockItem = (id) => (state) => state.allStockItems.stockItems[id];
export const { addStockItem } = stockItemsSlice.actions;

export default stockItemsSlice.reducer;