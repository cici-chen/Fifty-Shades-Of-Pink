
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'Sabrina', user_gender:'woman', lover_name:'Brad Pitt', lover_gender:'man'},
        {id: 2, user_name: 'Cecil', user_gender:'woman', lover_name:'Kat', lover_gender:'woman'},
        {id: 3, user_name: 'John Snow', user_gender:'man', lover_name:'Dragon Girl', lover_gender:'woman'}
      ]);
    });
};
