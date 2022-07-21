
exports.seed = async function(knex) {
  await knex('ingredient_details').truncate()
  await knex('ingredient_details').insert([
    {quantity: 4, measurement_unit: 'quarts', ingredient_id:1},
    {quantity: 1, measurement_unit: 'tablespoon', ingredient_id: 2},
    {quantity: 8, measurement_unit: 'ounces', ingredient_id: 3},
    {quantity: 16, measurement_unit: 'ounces', ingredient_id: 4}
  ]);
};

