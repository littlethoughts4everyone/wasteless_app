import { createSlice } from "@reduxjs/toolkit";

export const stockItemsSlice = createSlice({
    name: 'stockItems',
    initialState: {
        stockItems: {}
    },
    reducers: {
        addStockItem: (state, action) => {
            const {id, amount, unit, category, item} = action.payload;
            state.stockItems[id] = {
                id: id,
                amount: amount,
                unit: unit,
                category: category,
                item: item
            };
        }
    }
})

export const selectAllStockItems = (state) => state.allStockItems.stockItems;
export const { addStockItem } = stockItemsSlice.actions;

export default stockItemsSlice.reducer;