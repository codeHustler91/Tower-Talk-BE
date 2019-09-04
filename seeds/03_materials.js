exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials').del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {title: 'Basic English Elocution', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {title: 'Airport Terminology', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {title: 'Aircraft Terminology', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {title: 'Pilot Terminology', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {title: 'Weather Terminology', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {title: 'VFR Terminology', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {title: 'IFR Terminology', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {title: 'Sample Test', content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'}
      ]);
    });
};