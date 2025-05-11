import react from "react";
import { useSelector } from "react-redux";
import {selectIngredient} from "./ingredientsSlice";

export default function Ingredient({id}) {
    const ingredient = useSelector(selectIngredient(id));

    if (!ingredient) {
        return null;
    };

    return (
        <li className="ingredient-container">
            <p>{ingredient.amount}</p>
            <p>{ingredient.unit}</p>
            <p>{ingredient.name}</p>
        </li>
    )
}