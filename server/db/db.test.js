const knex = require('knex')
const testConfig = require('../../knexfile').test

const {getBookings, addBooking, getSingleBooking} = require('./db')


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
            comments: "I wanna go flying after",
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