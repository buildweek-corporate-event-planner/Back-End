
exports.up = function(knex) {
    return knex.schema.createTable('shoppingListItem', tbl => {
        tbl.increments()
        tbl.string('list_item', 128).notNullable()
        tbl.boolean('purchased').defaultTo(false)
        tbl.integer('assigned_to_shoppingList').notNullable()
        .references('id')
        .inTable('shoppingList')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shoppingListItem')
};
