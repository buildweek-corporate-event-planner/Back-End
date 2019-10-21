
exports.up = function(knex) {
    return knex.schema.createTable('todoListItem', tbl => {
        tbl.increments()
        tbl.string('list_item', 128).notNullable()
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('assigned_to_todoList').notNullable()
        .references('id')
        .inTable('todoList')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('todoListItem')
};
