exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructor_notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructor_notes').insert([
        {instructor_id: 1, material_id: 1, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 1, material_id: 2, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 1, material_id: 3, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 1, material_id: 4, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 1, material_id: 5, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 1, material_id: 6, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 1, material_id: 7, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 1, material_id: 8, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 1, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 2, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 3, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 4, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 5, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 6, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 7, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 2, material_id: 8, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 1, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 2, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 3, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 4, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 5, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 6, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 7, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'},
        {instructor_id: 3, material_id: 8, content: 'This is an example of what a lot of content would look like.  There will be multiple sentences and lines and maybe links to stuff. Just think of all the learning possibilities!!!'}
      ]);
    });
};