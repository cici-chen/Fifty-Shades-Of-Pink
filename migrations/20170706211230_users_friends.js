
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users_friends', (table) => {
    table.increments('id').primary()
    table.integer("users_id").unsigned();
    table.foreign("users_id").references('id').inTable('users');
    table.string('friend_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_friends')
};
