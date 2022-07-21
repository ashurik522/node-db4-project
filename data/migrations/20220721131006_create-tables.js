
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments()
    tbl.varchar('recipe_name', 128)
        .notNullable()
        .unique()
    tbl.timestamp('created_at')
        .defaultTo(knex.fn.now())
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.varchar('instructions', 200)
        .notNullable()
    tbl.integer('step_number')
        .notNullable()  
        .unsigned()
        .unique()
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.varchar('name', 128)
        .notNullable()
        .unique()
    tbl.integer('step_number')
        .unsigned()
        .notNullable()
        .references('step_number')
        .inTable('steps')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
  .createTable('ingredient_details', tbl => {
    tbl.increments()
    tbl.integer('quantity')
        .notNullable()
        .unsigned()
    tbl.varchar('measurement_unit', 128)
        .notNullable()
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};



exports.down = function(knex) {
    //drop opposite order
  return knex.schema.dropTableIfExists('ingredient_details')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
