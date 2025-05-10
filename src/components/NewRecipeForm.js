import react, { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from "uuid";
import { RECIPE_CATEGORIES } from "../data/foodData";
import { addRecipe } from "../features/recipes/recipesSlice";
import { addIngredient } from "../features/ingredients/ingredientsSlice";

export default function NewRecipeForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [source, setSource] = useState(""); 
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            return;
        };

        const ingredientIds = [];

        ingredients.forEach((ingredient) => {
            let ingredientId = uuidv4();
            ingredientIds.push(ingredientId);
            dispatch(addIngredient({...ingredient, id: ingredientId}));
        });

        const recipeId = uuidv4();

        dispatch(addRecipe({
            id: recipeId,
            name: name,
            category: category,
            ingredientIds: ingredientIds
        }));
    };

    const addIngredientInputs = (e) => {
        e.preventDefault();
        setIngredients(ingredients.concat({
            amount: "",
            unit: "",
            name: ""
        }));
    };

    const removeIngredient = (e, index) => {
        e.preventDefault();
        setIngredients(ingredients.filter((ingredient) => ingredient !== index));
    };

    const updateIngredientState = (index, property, value) => {
        const newIngredients = ingredients.slice();
        newIngredients[index][property] = value;
        setIngredients(newIngredients);
    };

    return (
        <section>
            <h1>Add a new recipe</h1>
            <form onSubmit={handleSubmit}>
                <input
                id="recipe-name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="Recipe Name" />
                <input
                id="recipe-source"
                value={source}
                onChange={(e) => setSource(e.currentTarget.value)}
                placeholder="Recipe Source" />
                <select 
                id="recipe-category"
                onChange={(e) => setCategory(e.currentTarget.value)}>
                    <option value="">Category</option>
                    {RECIPE_CATEGORIES.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-inputs">
                        <input
                        id={`amount-${index}`}
                        value={ingredients[index].amount}
                        onChange={(e) => updateIngredientState(index, "amount", e.currentTarget.value)}
                        placeholder="Amount" />
                        <input
                        id={`unit-${index}`}
                        value={ingredients[index].unit}
                        onChange={(e) => updateIngredientState(index, "unit", e.currentTarget.value)}
                        placeholder="Unit" />
                        <input
                        id={`name-${index}`}
                        value={ingredients[index].name}
                        onChange={(e) => updateIngredientState(index, "name", e.currentTarget.value)}
                        placeholder="Name" />
                        <button
                        className="remove-button"
                        onClick={(e) => removeIngredient(e, index)}>
                            Remove Ingredient
                        </button>
                    </div>
                ))}
                <div className="button-container">
                    <button onCanPlay={addIngredientInputs}>Add Ingredient</button>
                    <button type="submit">Create Recipe</button>
                </div>
            </form>
        </section>
    )
}