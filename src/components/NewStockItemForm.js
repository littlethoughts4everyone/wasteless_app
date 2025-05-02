import react, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import { addStockItem } from "../features/stock/stockItemsSlice";
import { FOOD_CATEGORIES } from "../data/foodData";

export default function NewStockItemForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        if (category.length === 0 || name.length === 0) {
            return;
        };

        const itemId = uuidv4();

        dispatch(addStockItem({
            id: itemId,
            amount: amount,
            unit: unit,
            category: category,
            name: name
        }));

       setAmount("");
       setUnit("");
       setCategory("");
       setName("");
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
                    placeholder="Amount"/>
                    <select
                    value={unit}
                    onChange={(e) => setUnit(e.currentTarget.value)}
                    defaultValue="">
                        <option value="" disabled hidden>Unit</option>
                        <option value="gram">g</option>
                        <option value="millilitre">ml</option>
                        <option value="tablespoon">tablespoon</option>
                        <option value="teaspoon">teaspoon</option>
                        <option value="kilogram">kg</option>
                        <option value="litre">l</option>
                        <option value="bunch">bunch</option>
                    </select>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.currentTarget.value)}
                    required
                    defaultValue="">
                        <option value="" disabled hidden>Category</option>
                        {FOOD_CATEGORIES.map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="Item Name"
                    required/>
                    <button className="submit-button" type="submit">Add Food Item</button>
                </div>
            </form>
        </section>
    )
}