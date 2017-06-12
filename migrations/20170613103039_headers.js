
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('headers', (table)=>{
    table.increments('id').primary()
    table.string('pageUrl')
    table.string('header')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('headers')
};
