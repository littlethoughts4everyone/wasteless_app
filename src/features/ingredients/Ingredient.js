import react from "react";
import { useSelector } from "react-redux";
import {selectIngredient} from "./ingredientsSlice";

export default function Ingredient({id}) {
    const ingredient = useSelector(selectIngredient(id));

    if (!ingredient) {
        return null;
    };

    return (
        <div className="ingredient-form">
            
        </div>
    )
}