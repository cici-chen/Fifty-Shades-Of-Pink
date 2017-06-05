
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'Sabrina', user_gender:'woman', lover_name:'Brad Pitt', lover_gender:'man'}
      ]);
    });
};
