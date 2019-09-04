exports.up = function(knex, promise) {
    return knex.schema.createTable('instructor_notes', (note) => {
        note.increments('id')
        note.text('content')
        note.integer('instructor_id').references('instructors.id')
        note.integer('material_id').references('materials.id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructor_notes')
};
