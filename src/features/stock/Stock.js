import react from "react";
import NewStockItemForm from "../../components/NewStockItemForm";
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
                    <div id="meatfish">
                        <ul className="items-list">
                            {Object.values(stockItems)
                            .filter((item) => item.category === "Meat / Fish")
                            .map((stockItem) => (
                                    <li className="stock-item" key={stockItem.id}>
                                        <div>
                                            <p className="item-amount">{stockItem.amount}</p>
                                            <p className="item-unit">{stockItem.unit}</p>
                                            <p className="item-name">{stockItem.name}</p>
                                            <button>X</button>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Vegetables / Fruits:</h2>
                    <div id="vegetablesfruits">

                    </div>
                </div>
                <div className="stock-category">
                    <h2>Dairy:</h2>
                    <div id="dairy">

                    </div>
                </div>
                <div className="stock-category">
                    <h2>Canned Goods:</h2>
                    <div id="cannedgoods">

                    </div>
                </div>
                <div className="stock-category">
                    <h2>Basic Foods:</h2>
                    <div id="basicfoods">

                    </div>
                </div>
                <div className="stock-category">
                    <h2>Spices:</h2>
                    <div id="spices">

                    </div>
                </div>
                <div className="stock-category">
                    <h2>Sauces:</h2>
                    <div id="sauces">

                    </div>
                </div>
                <div className="stock-category">
                    <h2>Beverages:</h2>
                    <div id="beverages">

                    </div>
                </div>
            </section>
        </div>
    );
}