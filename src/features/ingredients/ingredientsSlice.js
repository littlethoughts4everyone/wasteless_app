import { createSlice } from "@reduxjs/toolkit";

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredients: {}
    },
    reducers: {
        addIngredient: (state, action) => {
            const {id} = action.payload;
            state.ingredients[id] = action.payload;
        }
    }
});

export const selectIngredient = (id) => (state) => state.allIngredients.ingredients[id];
export const {addIngredient} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;