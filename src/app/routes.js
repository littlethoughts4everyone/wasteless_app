const ROUTES = {
    stockRoute: () => "/stock",
    categoriesRoute: () => "/categories",
    categoryRoute: (id) => `/categories/${id}`,
    addRecipeRoute: () => "/recipe/new",
    searchRoute: () => "/search"
};

export default ROUTES;