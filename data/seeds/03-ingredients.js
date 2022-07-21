
exports.seed = async function(knex) {
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {name: 'spaghetti', step_id: 1}
  ]);
};

