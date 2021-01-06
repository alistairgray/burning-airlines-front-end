/* DEPENDENCIES */
import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

/* AXIOS */
const BASE_URL = 'http://localhost:3000/flights';

/* ----- CHILD COMPONENT OF BURNING.JS ----- */

class Search extends React.Component {

    state = {
        origin: '',
        destination: '',
        flights: []
    };

    fetchFlights = () => {
        axios.get(BASE_URL, {
          params: {
            from: this.state.origin,
            to: this.state.destination
          }
        })
        .then((res) => {
          console.log(res.data);
          this.setState({
            flights: res.data
          })
            // console.log('response: ', res.data);

        })
        .catch(console.warn)
    }

    handleChangeOrigin = (ev) => {
        this.setState(
            {origin: ev.target.value}
        );
    }

    handleChangeDestination = (ev) => {
        this.setState(
            {destination: ev.target.value}
        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.fetchFlights()
        window.setInterval(this.fetchFlights, 2000)
    }

    render(){
        return(
            <div>

            <form onSubmit={this.handleSubmit}>

                <input type="text"
                placeholder="origin"
                onChange={this.handleChangeOrigin}/>

                <input type="text"
                placeholder="destination"
                onChange={this.handleChangeDestination}/>
              <div>
                <button>Check for Available Flights</button>
              </div>

            </form>

            {
              this.state.flights.map( flight =>
                <li className="flight-list" key={ flight.id }>
                  <span>
                    Date: { flight.scheduled }
                  </span> |
                  <span>
                    <Link to={`/flights/${flight.flight_number}`}>
                      flight #: { flight.flight_number }
                    </Link>
                  </span> |
                  <span>
                    { flight.from } to { flight.to }
                  </span> |
                  <span>
                    Plane: { flight.airplane_name }
                  </span>
                </li>
              )
            }
            </div>
        ) // return
    } // render
} // class Search

export default Search;

/* BACKLOG */
