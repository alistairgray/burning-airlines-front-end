import React from 'react';
import SeatMap from './SeatMap';
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/reservations';


class Reservations extends React.Component {

  state = {
    tempSelectedSeat: null,
    seatMap: [
      {'21':
        [
          {id:'00', col:'A', status: 'open'},
          {id:'01', col:'B', status: 'closed'},
          {id:'02',col:'C', status: 'closed'}
        ]
      },
      {'22':
        [
          {id:'10', col:'A', status: 'open'},
          {id:'11',col:'B', status: 'closed'},
          {id:'12',col:'C', status: 'open'}
        ]
      },
      {'23':
        [
          {id:'20', col:'A', status: 'closed'},
          {id:'21', col:'B', status: 'closed'},
          {id:'22', col:'C', status: 'closed'}
        ]
      }
    ],
    flight: {
      date: '3/11/13',
      flightNumber: '09',
      from: 'JFK',
      to: 'SFO',
      airplane_id: '5'
    }
  }

  fetchSeats = () => {
    axios.get(BASE_URL, {
      params: {
        flight: this.props.match.params.flightNumber
      }
    })
    .then( res => {
      this.setState({
        seatMap: res.data.seatMap,
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
      params: {
        id: this.state.tempSelectedSeat,
        userId: 'sadsad',
        flight: this.state.flight.flightNumber
      }
    })
    console.log('saved tempSelectedSeat: ', this.state.tempSelectedSeat)
  }

  componentDidMount(){
    this.fetchSeats();
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
