import react from "react";
import { useSelector } from "react-redux";
import {selectAllStockItems} from "./stockItemsSlice";

export default function StockItem() {
    const stockItems = useSelector(selectAllStockItems);

    if(!stockItems) {
        return null;
    }

    return (
        <div className="stock-item">
            <p className="item-amount">{stockItems.amount}</p>
            <p className="item-unit">{stockItems.unit}</p>
            <p className="item-name">{stockItems.name}</p>
            <button>X</button>
        </div>
    );
}