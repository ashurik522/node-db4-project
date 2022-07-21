
exports.seed = async function(knex) {
  await knex('steps').truncate()
  await knex('steps').insert([
    {step_number: 1, instructions: 'Set large pot of water to boil', recipe_id: 1 }
  ]);
};
