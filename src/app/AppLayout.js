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
                        Stock
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.categoriesRoute()}>
                        Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.addRecipeRoute()}>
                        Add Recipe
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.searchRoute()}>
                        Search
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}