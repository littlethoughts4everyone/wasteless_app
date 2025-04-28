import { configureStore } from "@reduxjs/toolkit";
import stockItemsReducer from "../features/stock/stockItemsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import recipesReducer from "../features/recipes/recipesSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
    reducer: {
        allStockItems: stockItemsReducer,
        allCategories: categoriesReducer,
        allRecipes: recipesReducer,
        search: searchReducer
    },
});