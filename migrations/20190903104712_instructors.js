
exports.up = function(knex) {
    return knex.schema.createTable('instructors', (instructor) => {
        instructor.increments('id')
        instructor.string('name')
        instructor.string('password')
        instructor.text('feedback')
        instructor.string('email')
        instructor.bigInteger('phone')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructors')
};
