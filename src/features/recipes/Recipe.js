import react from "react";
import { useSelector } from "react-redux";
import Ingredient from "../ingredients/Ingredient";
import {selectRecipe} from "./recipesSlice";

export default function Recipe({id}) {
    const recipe = useSelector(selectRecipe(id));

    return (
        <section>
            <h2 className="recipe-name">{recipe.name}</h2>
            <p className="recipe-source">{recipe.source}</p>
            <ul className="ingredients-list">
                {recipe.ingredientIds.map((id) => (
                    <Ingredient key={id} id={id}/>
                ))}
            </ul>
        </section>
    )
}