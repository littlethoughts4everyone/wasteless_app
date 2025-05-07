import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RECIPE_CATEGORIES } from "../../data/foodData";
import {selectAllRecipes} from "../recipes/recipesSlice";

export default function Category() {
    const recipes = useSelector(selectAllRecipes);
    const {categoryId} = useParams();
    const category = RECIPE_CATEGORIES[categoryId];

    const recipesForCategory = category.recipeIds.map((recipeId) => recipes[recipeId]);

    return (
        <section>
            <h1>{RECIPE_CATEGORIES.name}</h1>
            <ul className="recipes-list">
                {recipesForCategory.map((recipe) => (
                    <li className="recipe" key={recipe.id}>
                        <div className="recipe-container">

                        </div>
                    </li>
                ))}
            </ul>
            <Link to="recipe/new">
            Add New Recipe
            </Link>
        </section>
    )
}
