const knex = require('knex')
const testConfig = require('../../knexfile').test

const {getBookings, addBooking, getSingleBooking, updateBooking, deleteBooking} = require('./db')


let db = knex(testConfig)

beforeAll(() => {
    return db.migrate.latest()
})

beforeEach(() =>{
    return db.seed.run()
})


describe('getBookings',()=>{
    test('gets all bookings',()=>{
      return getBookings(db)
        .then(bookings =>{
            expect(bookings.length).toBe(1)
        })
    })
})

describe('addBooking',()=>{
    test('add a new booking',()=>{
        let newBooking = {
            name: "Jess",
            number: 278433871,
            dateCreated: new Date(Date.now()),
            start: new Date(2020, 8, 6, 17, 0),
            end: new Date(2020, 8, 6, 18, 0),
            comments: "I wanna go flying after"
        }
        return addBooking(newBooking, db)
            .then(()=>{
                return getSingleBooking(2,db)
                    .then((booking)=>{
                        expect(booking.name).toEqual('Jess')
                    })
            })
    })
})

describe('updateBooking',()=>{
    test('updates a booking',() =>{
        let booking ={
            name: "Leon",
            number: 278433871,
            start: new Date(2020, 8, 6, 17, 0),
            end: new Date(2020, 8, 6, 18, 0),
            comments: "I wanna go flying after"
        }
        return updateBooking(booking,1,db)
            .then(() =>{
                return getSingleBooking(1,db)
                .then((newbooking)=>{
                    expect(newbooking.name).toEqual('Leon')
                })
            })
    })
})


describe('deleteBooking',()=>{
    test('deletes a booking',()=>{
        return deleteBooking(1, db)
            .then(()=>{
                return getBookings(db)
                    .then((bookings)=>{
                        expect(bookings.length).toBe(0)
                    })
            })
    })
})