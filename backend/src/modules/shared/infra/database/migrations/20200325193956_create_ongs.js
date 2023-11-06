export const up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('whatsApp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

export const down = function(knex) {
  return knex.schema.dropTable('ongs');
};
