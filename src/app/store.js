import { configureStore } from "@reduxjs/toolkit";
import stockItemsReducer from "../features/stock/stockItemsSlice";
import recipesReducer from "../features/recipes/recipesSlice";
import ingredientsReducer from "../features/ingredients/ingredientsSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
    reducer: {
        allStockItems: stockItemsReducer,
        allIngredients: ingredientsReducer,
        allRecipes: recipesReducer,
        search: searchReducer
    },
});