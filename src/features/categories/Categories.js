import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { RECIPE_CATEGORIES } from "../../data/foodData";

export default function Categories() {
    return (
        <section>
            <div className="categories-container">
                {RECIPE_CATEGORIES.map((category) => (
                    <div className="recipe-category" key={category.id}>
                        <Link to={ROUTES.categoryRoute(category.id)} className="category-link">
                            <div className={category.name.toLowerCase().replace(/[^a-z]/g, "")}>
                                <h2>{category.name}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}