import React from "react";
import NewStockItemForm from "../../components/NewStockItemForm";
import { useSelector } from "react-redux";
import { selectAllStockItems } from "./stockItemsSlice";
import StockCategory from "../../components/StockCategory";
import { FOOD_CATEGORIES } from "../../data/foodData";

export default function Stock() {
  const stockItems = useSelector(selectAllStockItems);

  return (
    <div>
      <section className="stock-form">
        <h1>Add food items:</h1>
        <NewStockItemForm />
      </section>

      <section className="stock-container">
        <h1>Stock:</h1>
        {FOOD_CATEGORIES.map((category) => {
          const filteredItems = Object.values(stockItems).filter(
            (item) => item.category === category
          );

          return (
            <StockCategory
              key={category}
              title={category}
              items={filteredItems}
            />
          );
        })}
      </section>
    </div>
  );
}
