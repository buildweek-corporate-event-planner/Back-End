
exports.up = function(knex) {
    return knex.schema.createTable('vendors', tbl => {
        tbl.increments()
        tbl.string('vendor_name', 128).notNullable()
        tbl.integer('assigned_to_event').notNullable()
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vendors')
};
