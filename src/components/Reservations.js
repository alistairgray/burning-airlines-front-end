import React from 'react';
import SeatMap from './SeatMap';
import axios from 'axios'

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
      name: '09',
      from: 'JFK',
      to: 'SFO'
    }
  }

  fetchSeats = () => {
    axios.get(URL, {
      params: {
        flight: this.props.params.flight
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
  }

  saveReservation = ev => {
    ev.preventDefault()
    axios.post(URL, {
      params: {
        id: this.state.tempSelectedSeat,
        userId: 'sadsad',
        flight: this.state.flight.name
      }
    })
  }

  // componentDidMount(){
  //   fetchSeats()
  // }

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
