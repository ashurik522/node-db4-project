
exports.seed = async function(knex) {
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {name: 'water'},
    {name: 'salt'},
    {name: 'spaghetti'},
    {name: 'marinara'}
  ]);
};

