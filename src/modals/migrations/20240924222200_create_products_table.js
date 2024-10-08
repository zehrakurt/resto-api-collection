/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.increments('id').primary();
        table.integer('category_id').references('id').inTable('categories').onDelete('CASCADE').notNullable(); 
        table.string('name').nullable(); 
        table.text('description').nullable(); 
        table.integer('price').nullable(); 
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').nullable();
        table.timestamp('deleted_at').nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
