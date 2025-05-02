import React from "react";
import { useDispatch } from "react-redux";
import { deleteStockItem } from "../features/stock/stockItemsSlice";

export default function StockCategory({ title, items }) {
  const dispatch = useDispatch();

  return (
    <div className="stock-category">
      <h2>{title}:</h2>
      <div id={title.toLowerCase().replace(/[^a-z]/g, "")}>
        <ul className="items-list">
          {items.map((item) => (
            <li className="stock-item" key={item.id}>
              <div>
                <p className="item-amount">{item.amount}</p>
                <p className="item-unit">{item.unit}</p>
                <p className="item-name">{item.name}</p>
                <button onClick={() => dispatch(deleteStockItem(item.id))}>
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
