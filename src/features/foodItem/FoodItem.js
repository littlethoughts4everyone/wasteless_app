import react, {useState} from "react";
import { useSelector } from "react-redux";
import {selectFoodItem} from "./foodItemSlice";

export default function FoodItem({ id }) {
    const foodItem = useSelector(selectFoodItem(id));

    if(!foodItem) {
        return null;
    }

    return (
        <li>
            <div className="foodItem">
                <p>{foodItem.amount}</p>
                <p>{foodItem.unit}</p>
                <p>{foodItem.name}</p>
                <button>X</button>
            </div>
        </li>
    );
}