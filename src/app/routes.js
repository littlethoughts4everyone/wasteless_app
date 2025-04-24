const ROUTES = {
    stockRoute: () => "/stock",
    categoriesRoute: () => "/categories",
    categoryRoute: (id) => `/category/${id}`,
    recipesRoute: () => "/recipes",
    addRecipeRoute: () => "/recipe/new",
    searchRoute: () => "/search"
};

export default ROUTES;