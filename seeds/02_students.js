exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'dustin', password: 'dustin', instructor_notes: "he is the most talented young developer we've ever seen", email: 'dustin.keyes@gmail.com', level: 5, phone: 4079246419, instructor_id: 1},
        {name: 'fekade', password: 'fekade', instructor_notes: 'nice drums', email: 'fekade@flatiron.com', level: 2, phone: 54546678, instructor_id: 2},
        {name: 'ahmed', password: 'ahmed', instructor_notes: 'brilliant ramen innovation', email: 'ahemd@flatiron.com', level: 3, phone: 91755401, instructor_id: 3},
        {name: 'ricardo', password: 'ricardo', instructor_notes: 'send it!', email: 'ricardo@flatiron.com', level: 2, phone: 117657621, instructor_id: 4},
        {name: 'angela', password: 'angela', instructor_notes: 'she is really challenging herself', email: 'angela@flatiron.com', level: 3, phone: 3146441, instructor_id: 5},
        {name: 'nelly', password: 'nelly', instructor_notes: "she's got this", email: 'nelly@flatiron.com', level: 1, phone: 5161354, instructor_id: 6},
        {name: 'devin', password: 'devin', instructor_notes: "why does he keep talking about 'sub-breeds'??", email: 'devin@flatiron.com', level: 4, phone: 7176881, instructor_id: 1},
        {name: 'sarah', password: 'sarah', instructor_notes: "great music taste", email: 'sarah@flatiron.com', level: 5, phone: 7176881, instructor_id: 2}
      ]);
    });
};