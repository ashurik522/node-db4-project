
exports.seed = async function(knex) {
  await knex('steps').truncate()
  await knex('steps').insert([
    {step_number: 1, instructions: 'Bring large pot of water to boil and salt', recipe_id: 1 },
    {step_number: 2, instructions: 'Add spaghetti to water, stir frequently', recipe_id: 1},
    {step_number: 3, instructions: 'Drain spaghetti in colander', recipe_id: 1},
    {step_number: 4, instructions: 'Add marinara sauce and stir', recipe_id: 1}
  ]);
};
