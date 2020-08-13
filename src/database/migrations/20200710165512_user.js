exports.up = function(knex) {
    return knex.schema.createTable('user',(table) => {
        table.increments();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('endereco').notNullable();
        table.string('telefone').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};