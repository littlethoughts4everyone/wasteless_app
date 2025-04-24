import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../features/stock/stockSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import recipesReducer from "../features/recipes/recipesSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
    reducer: {
        allStock: stockReducer,
        allCategories: categoriesReducer,
        allRecipes: recipesReducer,
        search: searchReducer
    },
});