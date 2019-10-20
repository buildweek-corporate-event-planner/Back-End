
exports.up = function(knex) {
    return knex.schema.createTable('events', tbl => {
        tbl.increments()
        tbl.string('event_name', 128).notNullable()
        tbl.string('description', 500).notNullable()
        tbl.integer('budget').notNullable()
        tbl.date('event_date').notNullable()
        tbl.time('event_time').notNullable()
        tbl.integer('assigned_to_user').notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('events')
};
