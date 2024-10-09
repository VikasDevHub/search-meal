export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || [] ;
}

export function setSearchedMealsByLetter(state, meals) {
    state.mealsByLetter = meals || [] ;
}
export function setSearchedMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals || [] ;
}