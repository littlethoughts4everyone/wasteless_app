import react, {useState} from "react";
import { useDispatch, useDispatch } from "react-redux";
import {v4 as uuidv4} from "uuid";
import { addStockItem } from "../features/stockItem/stockItemsSlice";
import { FOOD_CATEGORIES } from "../data/foodData";
import { FOOD_UNITS } from "../data/foodData";

export default function NewStockItemForm() {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [category, setCategory] = useState("");
    const [item, setItem] = useState("");
    const itemId = uuidv4();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount.length === 0 || category.length === 0 || item.length === 0) {
            return;
        };

        dispatch(addStockItem({
            id: itemId,
            amount: amount,
            unit: unit,
            category: category,
            item: item
        }));
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.currentTarget.value)}
                    placeholder="Amount"
                    required/>
                    <select
                    onChange={(e) => setUnit(e.currentTarget.value)}
                    defaultValue="default">
                        <option></option>
                        <option>gram</option>
                        <option>milliliter</option>Ks
                        <option>tablespoon</option>
                        <option>teaspoon</option>
                        <option>kilogram</option>
                        <option>liter</option>
                        <option>bunch</option>
                    </select>
                </div>
            </form>
        </section>
    )
}