const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const database = require('knex')(config);


function getBookings(db = database) {
    return db('Bookings').select()
  }

function getSingleBooking(id, db=database){
    return db('Bookings')
        .where({id})
        .select()
        .first()
}

function addBooking(newBooking, db=database){
  return db('Bookings')
    .insert(newBooking)
}

function updateBooking(booking, id, db = database){
    return db('Bookings')
    .where({id})
    .update(booking)
}


function deleteBooking(id, db = database){
    return db('Bookings')
    .where({id})
    .del()
}




module.exports = {
      getBookings,
      addBooking,
      getSingleBooking,
      updateBooking,
      deleteBooking
  }