import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: {}
    },
    reducers: {
        addRecipe: (state, action) => {
            const {id} = action.payload;
            state.recipes[id] = action.payload;
        }
    }
});

export const selectAllRecipes = (state) => state.allRecipes.recipes;
export const selectRecipe = (id) => (state) => state.allRecipes.recipes[id];
export const {addQuiz} = recipesSlice.actions;

export default recipesSlice.reducer;
