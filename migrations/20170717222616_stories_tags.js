
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('stories_tags', (table) => {
    table.increments('id').primary()
    table.integer("stories_id").unsigned();
    table.foreign("stories_id").references('id').inTable('stories');
    table.string('tag')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stories_tags')
};
