import React from 'react'
import moment from 'moment';

import {getBookings} from '../api'
import AddBooking from './AddBooking'

class App extends React.Component {
  
  state = {
    bookings: []
  }

  componentDidMount = () =>  {
    getBookings()
      .then(bookings => {
        this.setState({bookings})
      })
  }
    refreshList = () => {
      getBookings()
        .then(bookings => {
          this.renderBookings(bookings)
        })
        .catch(err => {
          this.renderError(err)
        })
    }

    renderBookings = (bookings) => {
      this.setState({
        error: null,
        bookings: bookings
      })
    }
  
    // timeConverter =(timeData)=>{
    //   var myDate = new Date( timeData *1000);
    //   banana = myDate.toGMTString()+myDate.toLocaleString();
    // }
  
  render(){
    console.log(this.state);
    return (
      <>
        <ul>
          {this.state.bookings.map((booking)=>(<li><div>
            <h5>Name: {booking.name}</h5>
            <h5>Number: 0{booking.number}</h5>
            <h5>Booked on: {moment.unix(booking.dateCreated/1000).format('dddd, MMMM Do, h:mm A')}</h5>
            <h5>Start: {moment.unix(booking.start/1000).format('dddd, MMMM Do, h:mm A')}</h5>
            <h5>End: {moment.unix(booking.end/1000).format('dddd, MMMM Do, h:mm A')}</h5>
            <h5>Comments: {booking.comments}</h5>
          </div>
          </li>))}
        </ul>
        <AddBooking refresh={this.refreshList} />



      </>
    )
  }

}

export default App
