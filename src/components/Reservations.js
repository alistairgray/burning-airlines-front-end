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
      this.setState({
        seatMap: res.data.seat_map,
        flight: res.data.flight
      })
    })
  }

  isSelectionValid = id => {
    const seatMap = this.state.seatMap

    for(let i = 0; i < seatMap.length; i++){
      const [row] = Object.values(seatMap[i])
      const closed = row.find( el => el.id === id && el.status === 'closed')
      if (closed) return true;
    }

    return false;
  }

  onSelectSeat = id => {
    console.log(id);
    if(!this.isSelectionValid(id)){
      this.setState({
        tempSelectedSeat: id
      })
    }
  }

  saveReservation = ev => {
    ev.preventDefault()
    axios.post(BASE_URL, {
      seat_id: this.state.tempSelectedSeat,
      user_id: 2,
      flight_id: this.state.flight.id
    })
    .then( res => {
      // console.log(res.data);
    })
    .catch(console.warn)
  }

  componentDidMount(){
    this.fetchSeats()
    window.setInterval( this.fetchSeats, 2000)
  }

  render(){
    return(
      <div className="reservation">
      <h4>Choose Your Seats</h4>
        <div className="details">
          <span>
            Departs On: { this.state.flight.scheduled },
          </span>
          <span>
            Flight Number: { this.state.flight.flight_number },
          </span>
          <span>
            { this.state.flight.from } to&nbsp;
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
