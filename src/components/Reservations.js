import React from 'react';
import SeatMap from './SeatMap';
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/reservations';


class Reservations extends React.Component {

  state = {
    tempSelectedSeat: null,
    seatMap: [],
    flight: {}
  }

  fetchSeats = () => {
    axios.get(BASE_URL, {
      params: {
        flight_number: this.props.match.params.flight_number
      }
    })
    .then( res => {
      console.log(res.data);
      this.setState({
        seatMap: res.data.seat_map,
        flight: res.data.flight
      })
    })
  }

  onSelectSeat = id => {
    console.log(id);
    this.setState({
      tempSelectedSeat: id
    })
    console.log('tempselectedSeat: ',this.state.tempSelectedSeat);
  }

  saveReservation = ev => {
    ev.preventDefault()
    axios.post(BASE_URL, {
      seat_id: this.state.tempSelectedSeat,
      user_id: 2,
      flight_id: this.state.flight.id
    })
    .then( res => {
      console.log(res.data);
      // this.fetchSeats()
    })
    .catch(console.warn)
  }

  componentDidMount(){
    this.fetchSeats()
    window.setInterval( this.fetchSeats, 2000)
  }

  render(){
    return(
      <div>
      <h4>Choose Your Seats</h4>
        <div>
          <span>
            { this.state.flight.date }
          </span>
          -
          <span>
            Flight { this.state.flight.flightNumber }
          </span>
          <br />
          {/*This will need to be changed to airplane.name*/}
          <span>
            Type of Plane: {this.state.flight.airplane_id}
          </span>
          <br />
          <span>
            { this.state.flight.from } `{'>'}`
            { this.state.flight.to }
          </span>
        </div>
        <form onSubmit={ this.saveReservation }>
          <SeatMap
            seatMap={ this.state.seatMap }
            tempSelectedSeat={ this.state.tempSelectedSeat }
            onSelectSeat={ this.onSelectSeat }
          />
          <br />
          <button>Book Reservation</button>
        </form>

      </div>
    )
  }
}

export default Reservations
