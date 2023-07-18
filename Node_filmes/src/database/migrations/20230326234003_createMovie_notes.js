exports.up = knex => knex.schema.createTable('movie_notes', table => {
    table.increments('id')
    table.text('tittle').notNullable()
    table.text('description').notNullable()
    table.integer('rating').notNullable()
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
    table.timestamp('create_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('users')