exports.up = function(knex) {
    return knex.schema.createTable('calendario',(table) => {
		table.increments();
        table.string('data').notNullable();
        table.string('local').notNullable();
        table.string('descricao').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('calendario');
};