
exports.seed = async function(knex) {
  await knex('recipes').truncate()
  await knex('recipes').insert([
    { recipe_name: 'Spaghetti and Meatballs'}
  ]);
};
