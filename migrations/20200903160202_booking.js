
exports.up = function(knex) {
  return knex.schema.createTable('Bookings',(table) =>{
      table.increments('id').primary()
      table.string('name')
      table.integer('number')
      table.date('dateCreated')
      table.datetime('start').unique()
      table.datetime('end').unique()
      table.string('comments')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Bookings')
};
