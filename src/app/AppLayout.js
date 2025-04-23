import react from "react";
import {Outlet, NavLink} from "react-router-dom";
import ROUTES from "./routes";

export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <NavLink to={ROUTES.stockRoute()}>
                        Vorrat
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.categoriesRoute()}>
                        Rezepte
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.addRecipeRoute()}>
                        Rezept hinzufügen
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.searchRoute()}>
                        Suche
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}