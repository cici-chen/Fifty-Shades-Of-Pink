
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('headers').del()
    .then(function () {
      // Inserts seed entries
      return knex('headers').insert([
        {id: 1, pageUrl:'/', header:'read my story'},
        {id: 2, pageUrl:'/story-library', header:'choose a story'},
        {id: 3, pageUrl:'fifty-shades-of-pink', header:'fifty shades of pink'},
        {id: 4, pageUrl:'hotel-room', header:'hotel room'},
        {id: 5, pageUrl:'behind-the-mask-1', header:'behind the mask'}
      ]);
    });
};
