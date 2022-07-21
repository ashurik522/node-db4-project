const db = require('../../data/db-config')


const find = () => {
    return db('recipes')
}



const getRecipeById = async (id) => {
    const recipeArray = await db('recipes')
        .leftJoin('steps', 'recipes.recipe_id', 'steps.recipe_id')
        .leftJoin('ingredient_details', 'steps.step_id', 'ingredient_details.step_id')
        .leftJoin('ingredients', 'ingredient_details.ingredient_id', 'ingredients.ingredient_id')
        .orderBy( 'steps.step_number')
        .select(
            'recipes.recipe_id', 
            'recipes.created_at', 
            'recipes.recipe_name', 
            'steps.step_id', 
            'steps.step_number', 
            'steps.instructions', 
            'ingredients.ingredient_id', 
            'ingredients.name', 
            'ingredient_details.quantity', 
            'ingredient_details.measurement_unit'
        )
        .where('recipes.recipe_id', id)
    
    const { recipe_id, recipe_name, created_at } = recipeArray[0]

    const result = {
        recipe_id,
        recipe_name,
        created_at,
        steps: recipeArray.filter(elem => elem.step_id != null )
            .reduce((prev, curr)  => {
                if(!prev[curr.step_number-1]){
                    prev[curr.step_number-1] = {
                        step_number: curr.step_number,
                        step_id: curr.step_id,
                        instructions: curr.instructions,
                        ingredients: []
                    }
                }
                if(curr.ingredient_id != null){
                    prev[curr.step_number-1].ingredients
                    .push({
                        ingredient_id: curr.ingredient_id,
                        ingredient_name: curr.name,
                        quantity: curr.quantity,
                        unit: curr.measurement_unit
                    })
                }
                

                return prev
                
            }, [])
    }
    

    return result

}

module.exports = {
    find,
    getRecipeById
}