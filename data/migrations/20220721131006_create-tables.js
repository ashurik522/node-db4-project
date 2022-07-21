
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments()
    tbl.string('recipe_name', 128).notNullable()
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
  })
};



exports.down = function(knex) {
    //drop opposite order
  return knex.schema.dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
