exports.up = function(knex) {
    return knex.schema.createTable('music',(table) => {
        table.string('nome').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('music');
};