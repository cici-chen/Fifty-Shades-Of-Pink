
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('stories', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('title')
    table.string('image')
    table.string('description')
    table.string('storyUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stories')
};
