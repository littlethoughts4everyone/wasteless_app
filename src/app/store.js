import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../features/stock/stockSlice";
import foodItemsReducer from "../features/foodItem/foodItemSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import recipesReducer from "../features/recipes/recipesSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
    reducer: {
        allStock: stockReducer,
        allFoodItems: foodItemsReducer,
        allCategories: categoriesReducer,
        allRecipes: recipesReducer,
        search: searchReducer
    },
});