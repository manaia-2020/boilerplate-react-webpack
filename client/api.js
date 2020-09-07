import request from 'superagent'


const serverURL = 'http://localhost:3001/v1/booking'

export function getBookings(){
    return request
    .get(serverURL)
    .then(response => response.body)
  }

  export function addBooking(newBooking){
    return request
      .post(serverURL)
      .send(newBooking)
      .then ((response) => response)
  }