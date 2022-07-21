
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments('recipe_id')
    tbl.varchar('recipe_name', 128)
        .notNullable()
        .unique()
    tbl.timestamp('created_at')
        .defaultTo(knex.fn.now())
  })
  .createTable('steps', tbl => {
    tbl.increments('step_id');
    tbl.varchar('instructions', 200)
        .notNullable()
    tbl.integer('step_number')
        .notNullable()  
        .unsigned()
        .unique()
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.varchar('name', 128)
        .notNullable()
        .unique()
  })
  .createTable('ingredient_details', tbl => {
    tbl.integer('quantity')
        .notNullable()
        .unsigned()
    tbl.varchar('measurement_unit', 128)
        .notNullable()
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
    tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
    tbl.primary(['ingredient_id', 'step_id'])
  })
  
 
};


exports.down = function(knex) {
    //drop opposite order
  return knex.schema.dropTableIfExists('ingredient_details')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
