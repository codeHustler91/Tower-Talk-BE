exports.up = function(knex, promise) {
    return knex.schema.createTable('student_notes', (note) => {
        note.increments('id')
        note.text('content')
        note.integer('student_id').references('students.id')
        note.integer('material_id').references('materials.id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('student_notes')  
};