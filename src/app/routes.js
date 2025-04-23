const ROUTES = {
    stockRoute: () => "/stock",
    categoriesRoute: () => "/categories",
    categorieRoute: (id) => `/category/${id}`,
    recipesRoute: () => "/recipes",
    addRecipeRoute: () => "/recipe/new",
    searchRoute: () => "/search"
};

export default ROUTES;