import react, {useState} from "react";
import { useDispatch, useDispatch } from "react-redux";
import {v4 as uuidv4} from "uuid";
import { addFoodItem } from "../features/foodItem/foodItemSlice";
import { FOOD_CATEGORIES } from "../data/foodData";
import { FOOD_UNITS } from "../data/foodData";

export default function NewStockItemForm() {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [category, setCategory] = useState("");
    const [item, setItem] = useState("");
    const itemId = uuidv4();
}