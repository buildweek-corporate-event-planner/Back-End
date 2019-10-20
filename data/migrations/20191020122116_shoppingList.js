
exports.up = function(knex) {
    return knex.schema.createTable('shoppingList', tbl => {
        tbl.increments()
        tbl.string('list_item', 128).notNullable()
        tbl.boolean('purchased').defaultTo(false)
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
