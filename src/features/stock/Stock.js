import react from "react";
import NewStockItemForm from "../../components/NewStockItemForm";
import { useSelector } from "react-redux";
import { selectAllStockItems } from "./stockItemsSlice";
import StockItem from "./StockItem";

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
                    <h2>Meat &sol Fish:</h2>
                    <div id="meatfish">
                        <ul>
                            {Object.values(stockItems).map((stockItem) => (
                                    <StockItem/>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="stock-category">
                    <h2>Vegetables &sol Fruits:</h2>
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