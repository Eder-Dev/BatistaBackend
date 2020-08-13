exports.up = function(knex) {
    return knex.schema.createTable('galary',(table) => {
		table.increments();
        table.string('nome').notNullable();
        table.string('foto').notNullable();
        table.string('legenda').notNullable();
        table.json('comentario');
        table.date('data').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('galary');
};