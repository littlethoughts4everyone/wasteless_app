import { createSlice } from "@reduxjs/toolkit";

export const stockItemsSlice = createSlice({
    name: 'stockItems',
    initialState: {
        stockItems: {}
    },
    reducers: {
        addStockItem: (state, action) => {
            const {id, amount, unit, category, name} = action.payload;
            state.stockItems[id] = {
                id: id,
                amount: amount,
                unit: unit,
                category: category,
                name: name
            };
        },
        deleteStockItem: (state, action) => {
            const id = action.payload;
            delete state.stockItems[id];
        },
        changeItemAmount: (state, action) => {
            const {id, amount} = action.payload;
            if (state.stockItems[id]) {
                state.stockItems[id].amount = amount;
            };
        }
    }
});

export const selectAllStockItems = (state) => state.allStockItems.stockItems;
export const selectStockItem = (id) => (state) => state.allStockItems.stockItems[id];
export const { addStockItem, deleteStockItem, changeItemAmount } = stockItemsSlice.actions;

export default stockItemsSlice.reducer;