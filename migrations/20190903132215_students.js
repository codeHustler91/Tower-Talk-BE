exports.up = function(knex, promise) {
    return knex.schema.createTable('students', (student) => {
        student.increments('id')
        student.string('name')
        student.string('password')
        student.text('instructor_notes')
        student.string('email')
        student.integer('level')
        student.bigInteger('phone')
        student.integer('instructor_id').references('instructors.id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('students')
};
