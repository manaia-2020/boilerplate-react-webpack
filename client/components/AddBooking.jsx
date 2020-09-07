import React from 'react'
import {addBooking} from '../api'

export default class AddBooking extends React.Component{
    
    state = {
        name:'',
        number:'',
        dateCreated:'',
        start:'',
        end:'',
        comments:''
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () =>{
        addBooking(this.state)
        .then((result) => {
            getBookings()
            this.props.refresh()
        })
    }
    
    render(){
        return (
            <>
                <h1>Add Booking</h1>
                <form>
                <input placeholder='Name' name='name'
                onChange={this.handleChange}
                value={this.state.name}/>

                <input placeholder='Number' name='number'
                onChange={this.handleChange}
                value={this.state.number}/>

                <input placeholder='dateCreated' name='dateCreated'
                onChange={this.handleChange}
                value={this.state.dateCreated}/>

                <input placeholder='Start' name='start'
                onChange={this.handleChange}
                value={this.state.start}/>

                <input placeholder='End' name='end'
                onChange={this.handleChange}
                value={this.state.end}/>
                                    
                <input placeholder='Comments' name='comments'
                onChange={this.handleChange}
                value={this.state.comments}/>

                <button onClick={this.handleSubmit}>Add Booking</button>
                </form>
            </>
        )
    }
}