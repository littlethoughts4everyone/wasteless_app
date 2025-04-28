import react, {useState} from "react";
import { useSelector } from "react-redux";
import {selectStockItem} from "./stockItemsSlice";

export default function FoodItem({ id }) {
    const stockItem = useSelector(selectStockItem(id));

    if(!stockItem) {
        return null;
    }

    return (
        <li>
            <div className="stock-item">
                <p>{stockItem.amount}</p>
                <p>{stockItem.unit}</p>
                <p>{stockItem.name}</p>
                <button>X</button>
            </div>
        </li>
    );
}