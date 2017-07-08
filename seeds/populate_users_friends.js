
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_friends').insert([
        {id: 1, friend_name:'Lily',users_id:1}
      ]);
    });
};
