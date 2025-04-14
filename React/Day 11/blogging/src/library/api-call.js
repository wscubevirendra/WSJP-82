const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    if (response.status == 200) {
        const data = await response.json();
        return data.recipes;

    } else {
        return [];
    }
}

const fetchRecipesById = async (id) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (response.status == 200) {
        const data = await response.json();
        return data

    } else {
        return null;
    }
}

export { fetchRecipes, fetchRecipesById }