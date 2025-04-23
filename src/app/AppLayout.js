import react from "react";
import {Outlet, NavLink} from "react-router-dom";
import ROUTES from "./routes";

export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <NavLink to={ROUTES.vorratRoute()}>
                        Vorrat
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.rezepteRoute()}>
                        Rezepte
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.hinzufuegenRoute()}>
                        Rezept hinzufügen
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.sucheRoute()}>
                        Suche
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}