
exports.seed = async function(knex) {
  await knex('ingredient_details').truncate()
  await knex('ingredient_details').insert([
    {quantity: 8, measurement_unit: 'oz', ingredient_id:1}
  ]);
};

