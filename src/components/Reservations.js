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
        <div>
          <span>
            { this.state.flight.date }
          </span>
          <span>
            Flight { this.state.flight.name }
          </span>
          <span>
            { this.state.flight.from } >
            { this.state.flight.to }
          </span>
        </div>
        <form onSubmit={ this.saveReservation }>
          <SeatMap
            seatMap={ this.state.seatMap }
            tempSelectedSeat={ this.state.tempSelectedSeat }
            onSelectSeat={ this.onSelectSeat }
          />
          <button>Book Reservation</button>
        </form>
      </div>
    )
  }
}

export default Reservations
