import react from "react";

export default function StockItem({amount, unit, name}) {

    return (
        <div className="stock-item">
            <p className="item-amount">{amount}</p>
            <p className="item-unit">{unit}</p>
            <p className="item-name">{name}</p>
            <button>X</button>
        </div>
    );
}