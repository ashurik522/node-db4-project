
exports.seed = async function(knex) {
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {name: 'water', step_number: 1},
    {name: 'salt', step_number: 1},
    {name: 'spaghetti', step_number: 2},
    {name: 'marinara', step_number: 4}
  ]);
};

