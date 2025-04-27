import { createSlice } from "@reduxjs/toolkit";

export const foodItemsSlice = createSlice({
    name: 'foodItems',
    initialState: {
        foodItems: {}
    },
    reducers: {
        addFoodItem: (state, action) => {
            const {id} = action.payload;
            state.foodItems[id] = action.payload;
        }
    }
})

export const selectFoodItem = (id) => (state) => state.allFoodItems.foodItems[id];
export const { addFoodItem } = foodItemsSlice.actions;

export default foodItemsSlice.reducer;