
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.string('friend_name');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table)=>{
    table.dropColumn('friend_name');
  })
};
