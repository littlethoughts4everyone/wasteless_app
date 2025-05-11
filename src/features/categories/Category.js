import react from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import { RECIPE_CATEGORIES } from "../../data/foodData";
import Recipe from "../recipes/Recipe";
import {selectAllRecipes} from "../recipes/recipesSlice";

export default function Category() {
    const recipes = useSelector(selectAllRecipes);
    const { categoryId } = useParams(); 
    const category = RECIPE_CATEGORIES.find(c => c.id === categoryId);

    if (!category) return <p>Category not found</p>;

    const recipesForCategory = Object.values(recipes).filter(
    (recipe) => recipe.category === category.name
    );

    return (
        <section>
            <h1>{category.name}</h1>
            <ul className="recipes-list">
                {recipesForCategory.map((recipe) => (
                    <Recipe key={recipe.id} id={recipe.id} />
                ))}
            </ul>
            <Link to={ROUTES.addRecipeRoute}>
            Add New Recipe
            </Link>
        </section>
    )
}
