import react from "react";
import NewStockItemForm from "../../components/NewStockItemForm";
import StockItem from "./StockItem";
import { useSelector } from "react-redux";
import { selectAllStockItems } from "./stockItemsSlice";

export default function Stock() {

    const stockItems = useSelector(selectAllStockItems);

    return (
        <div>
            <section className="stock-form">
                <h1>Add food items:</h1>
                <NewStockItemForm/>
            </section>
            <section className="stock-container">
                <h1>Stock:</h1>
                <div className="stock-category">
                    <h2>Meat / Fish:</h2>
                    <div id="meat-fish">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Meat / Fish")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Vegetables / Fruits:</h2>
                    <div id="vegetables-fruits">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Vegetables / Fruits")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Dairy:</h2>
                    <div id="dairy">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Dairy")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Canned Food:</h2>
                    <div id="canned-food">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Canned Food")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Basic Foods:</h2>
                    <div id="basic-foods">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Basic Foods")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Spices:</h2>
                    <div id="spices">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Spices")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Sauces:</h2>
                    <div id="sauces">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Sauces")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Beverages:</h2>
                    <div id="beverages">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Beverages")
                            .map((stockItem) => (
                                <li className="stock-item" key={stockItem.id}>
                                    <StockItem amount={stockItem.amount} unit={stockItem.unit} name={stockItem.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}