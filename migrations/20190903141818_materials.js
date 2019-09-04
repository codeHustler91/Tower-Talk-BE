exports.up = function(knex, promise) {
    return knex.schema.createTable('materials', (material) => {
        material.increments('id')
        material.string('title')
        material.text('content')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('materials')
};
