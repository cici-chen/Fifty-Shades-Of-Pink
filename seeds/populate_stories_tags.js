exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories_tags').insert([
        {id: 1, stories_id:1, tag: 'romantic'},
        {id: 2, stories_id:1, tag: 'celebrity'},
        {id: 3, stories_id:2, tag: 'bedroom action'},
        {id: 4, stories_id:2, tag: 'no plot'},
        {id: 5, stories_id:3, tag: 'stranger'},
        {id: 6, stories_id:3, tag: 'one night stand'},
        {id: 7, stories_id:4, tag: 'spanking'},
        {id: 8, stories_id:4, tag: 'one night stand'}
      ]);
    });
};
