import react from "react";
import NewStockItemForm from "../../components/NewStockItemForm";
import { useSelector } from "react-redux";
import {selectAllStock} from "./stockSlice";

export default function Stock() {

    const stock = useSelector(selectAllStock);

    return (
        <div>
            <section className="stock-form">
                <h1>Lebensmittel hinzufügen</h1>
                <NewStockItemForm/>
            </section>
            <section className="stock-container">
                <h1>Vorrat</h1>
                <div className="stock-category">
                    <h2>Fleisch/Fisch</h2>
                </div>
                <div className="stock-category">
                    <h2>Gemüse/Obst</h2>
                </div>
                <div className="stock-category">
                    <h2>Molkereiprodukte</h2>
                </div>
                <div className="stock-category">
                    <h2>Konserven</h2>
                </div>
                <div className="stock-category">
                    <h2>Grundnahrungsmittel</h2>
                </div>
                <div className="stock-category">
                    <h2>Gewürze</h2>
                </div>
                <div className="stock-category">
                    <h2>Saucen</h2>
                </div>
                <div className="stock-category">
                    <h2>Getränke/Spirituosen</h2>
                </div>
            </section>
        </div>
    );
}