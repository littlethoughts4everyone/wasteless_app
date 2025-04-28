import react, {useState} from "react";
import { useDispatch, useDispatch } from "react-redux";
import {v4 as uuidv4} from "uuid";
import { addStockItem } from "../features/stock/stockItemsSlice";
import { FOOD_CATEGORIES } from "../data/foodData";

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
                    required
                    defaultValue="default">
                        <option value="default" disabled hidden>Unit</option>
                        <option></option>
                        <option>gram</option>
                        <option>milliliter</option>
                        <option>tablespoon</option>
                        <option>teaspoon</option>
                        <option>kilogram</option>
                        <option>liter</option>
                        <option>bunch</option>
                    </select>
                    <select
                    onChange={(e) => setCategory(e.currentTarget.value)}
                    required>
                        {FOOD_CATEGORIES.map(({name}) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <input
                    id="item"
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.currentTarget.value)}
                    placeholder="Item Name"
                    required/>
                </div>
            </form>
        </section>
    )
}