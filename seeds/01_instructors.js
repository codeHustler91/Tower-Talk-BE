exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructors').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        {name: 'damon', password: 'damon', feedback: 'good redux lesson', email: 'damon.chivers@flatiron.com', phone: 1234},
        {name: 'kyle', password: 'kyle', feedback: 'killer breakout kyle', email: 'kyle.coberly@flatiron.com', phone: 5678},
        {name: 'dina', password: 'dina', feedback: 'loved the whiteboarding!', email: 'dina@flatiron.com', phone: 9101},
        {name: 'stephanie', password: 'stephanie', feedback: 'good improv', email: 'steph@flatiron.com', phone: 1121},
        {name: 'jared', password: 'jared', feedback: 'thanks for the debugging support', email: 'jared@flatiron.com', phone: 3141},
        {name: 'kat', password: 'kat', feedback: 'meow meow meow meeeeoowww', email: 'kat@flatiron.com', phone: 5161},
        {name: 'jesse', password: 'jesse', feedback: 'thanks for the interview help', email: 'jesse@flatiron.com', phone: 7181}
      ]);
    });
};
