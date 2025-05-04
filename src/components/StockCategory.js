import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStockItem, changeItemAmount } from "../features/stock/stockItemsSlice";

export default function StockCategory({ title, items }) {
  const dispatch = useDispatch();
  const [newAmounts, setNewAmounts] = useState({});

  const handleAmountChange = (e, id) => {
    const value = e.target.value;
    setNewAmounts((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    const amount = newAmounts[id];
    if (!amount) return;

    dispatch(changeItemAmount({ id, amount }));

    setNewAmounts((prev) => ({
      ...prev,
      [id]: ""
    }));
  };

  return (
    <div className={title.toLowerCase().replace(/[^a-z]/g, "")}>
      <h2>{title}:</h2>
      <ul className="items-list">
        {items.map((item) => (
          <li className="stock-item" key={item.id}>
            <div className="item-info">
              <p className="item-amount">{item.amount}</p>
              <p className="item-unit">{item.unit}</p>
              <p className="item-name">{item.name}</p>
            </div>
            <div className="item-options">
              <form onSubmit={(e) => handleSubmit(e, item.id)}>
                <input
                  type="number"
                  value={newAmounts[item.id] || ""}
                  onChange={(e) => handleAmountChange(e, item.id)}
                  placeholder="New Amount"
                />
                <button className="change-button" type="submit">
                  Change
                </button>
              </form>
              <button onClick={() => dispatch(deleteStockItem(item.id))}>
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

