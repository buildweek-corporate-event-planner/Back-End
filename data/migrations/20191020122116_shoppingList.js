
exports.up = function(knex) {
    return knex.schema.createTable('shoppingList', tbl => {
        tbl.increments()
        tbl.string('list_name', 128).notNullable()
        tbl.integer('assigned_to_event').notNullable()
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shoppingList')
};
